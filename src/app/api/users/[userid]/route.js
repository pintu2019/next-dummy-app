import { NextResponse } from "next/server";
import { users } from "@/utils/db";
export function GET(request,content){
    const userList = users;
    const userData = userList.filter((user)=> user.id == content.params.userid)
    return NextResponse.json(
        userData.length == 0 ? {result:'no data found',status:'failure'} :{result:userData,status:'success',message:'message fetch successfully'},
    )      
}