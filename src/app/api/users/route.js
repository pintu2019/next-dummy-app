import { NextResponse } from 'next/server';
import {users} from '@/utils/db'

// export  async function GET(request) {
//   return NextResponse.json({
//     message: "Hello from the users API route!",
//     status: "success",
//     data:{
//         users :[{
//             id: 1,
//             name: "John Doe", 
//             email: "john@test.com"
//         }]
//     }
//   })
// }

export async function GET(){
    const userList  = users
    
    return NextResponse.json(
        userList,{statuscode:200,message:"users fetched successfully"}
    )
}
export async function POST(request){
   let payload = await request.json()
    if (!payload.name || !payload.email || !payload.age){
     return NextResponse.json({
        message:'All fields are required',
        status: 'error',
        stauscode: 400
     })
    }
    return NextResponse.json({
        message:'User created successfully',
        status: 'success',  
        statuscode: 201,
    })
} 

