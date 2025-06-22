import { employees } from "@/utils/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ Correct type for the context object
type Context = {
  params: {
    empId: string;
  };
};

// GET handler
export function GET(request: NextRequest, context: Context) {
  const empId = context.params.empId;
  const employeeDetails = employees.filter(emp => emp.empId == empId);

  return NextResponse.json(
    employeeDetails.length === 0
      ? { message: "Employee not found" }
      : employeeDetails[0]
  );
}

// PUT handler
export async function PUT(request: NextRequest, context: Context) {
  const empId = context.params.empId;
  const payload = await request.json();

  if (!payload.name || !payload.age || !payload.company) {
    return NextResponse.json({ message: "Please provide all fields" }, { status: 400 });
  }

  return NextResponse.json({
    message: `Employee with ID ${empId} updated successfully`,
    data: payload
  });
}

// DELETE handler
export function DELETE(request: NextRequest, context: Context) {
  const empId = context.params.empId;

  if (!empId) {
    return NextResponse.json({ message: "Employee not found", success: false }, { status: 404 });
  }

  return NextResponse.json({ result: "Employee deleted", success: true }, { status: 200 });
}
