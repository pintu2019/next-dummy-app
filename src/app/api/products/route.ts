import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionSrt)
    const data  = await Product.find();
    console.log(data);
    return NextResponse.json({success:true, message:"Products API is working fine",response:data}, { status: 200 });
}

export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(connectionSrt);
    let product = new Product(payload)
    const result = await product.save();
    return NextResponse.json({result,success:true})
}