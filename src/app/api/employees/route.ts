import { NextResponse } from "next/server";
import { employees } from "@/utils/db";

export async function GET(request: Request) {
    return NextResponse.json({
        employees,
        status: "success",
        message: "Employees fetched successfully"
    });
}