import { employees } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(
   request: Request,
   content: { params: { empId: { toString: () => string } } }
) {
   const employeesData = employees;
   const employeeDetails = employeesData.filter((emp)=> emp.empId == content.params.empId.toString())
    console.log("Employee Details:", employeeDetails.length); 
   return NextResponse.json(
      employeeDetails.length == 0 ? { message: "Employee not found" } : employeeDetails[0]
   )
}

export async function PUT(
   req: Request,
   content: { params: { empId: { toString: () => string } } }
) {
   const payload = await req.json()
   const userId = content.params.empId.toString()
   if(!payload.name || !payload.age || !payload.company){
      return NextResponse.json({ message: "Please provide all fields" }, { status: 400 });
   }
   return NextResponse.json(
      { message: `Employee with ID ${userId} updated successfully`, data: payload },   
   )
}

export function DELETE(
   request: Request,
   content: { params: { empId: { toString: () => any } } }
) {
   const empId = content.params.empId
   if (empId){
      return NextResponse.json({result:"Employee deleted", success:true},{status:200})
   }
   if (!empId){
      return NextResponse.json({ message: "Employee not found",success:false }, { status: 404 });
   }
}