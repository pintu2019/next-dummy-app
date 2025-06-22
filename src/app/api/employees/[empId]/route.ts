import { employees } from "@/utils/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ Properly typed context inline
export function GET(req: NextRequest, { params }: { params: { empId: string } }) {
  const empId = params.empId;
  const employeeDetails = employees.filter(emp => emp.empId === empId);

  return NextResponse.json(
    employeeDetails.length === 0
      ? { message: "Employee not found" }
      : employeeDetails[0]
  );
}

export async function PUT(req: NextRequest, { params }: { params: { empId: string } }) {
  const empId = params.empId;
  const payload = await req.json();

  if (!payload.name || !payload.age || !payload.company) {
    return NextResponse.json({ message: "Please provide all fields" }, { status: 400 });
  }

  return NextResponse.json({
    message: `Employee with ID ${empId} updated successfully`,
    data: payload
  });
}

export function DELETE() {
//   const empId = params.empId;

  return NextResponse.json({ result: "Employee deleted", success: true }, { status: 200 });
}
