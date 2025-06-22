import { NextResponse } from "next/server";

export async function GET(request,content){
    console.log("API route called with params:", content);
    const  studentDetails = content.params.student;
    console.log("Student Details:", studentDetails);
    //  return new Response('Hello from the API route');
     return NextResponse.json({studentDetails: studentDetails}, { status: 200 });
}