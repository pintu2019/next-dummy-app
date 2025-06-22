"use client"

import { useEffect, useState } from "react";

interface UpdateUserProps {
    params: {
        empId: string;
        name?: string;
        age?: number;
        company?: string;
    };
}

const UpdateUser = ({ params }: UpdateUserProps) =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");  
    const [company, setCompany] = useState("");
    const empId = params.empId;

    useEffect(() =>{
        getEmployeeDetails();
    })

    const getEmployeeDetails = async () =>{
        const response = await fetch(`http://localhost:3000/api/employees/${empId}`);
        const data = await response.json();
        setName(data.name);
        setAge(data.age);
        setCompany(data.company);
    }
    const UpdateUser = async() =>{
       let result = await fetch(`http://localhost:3000/api/employees/${empId}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                age: age,
                company: company
            }),
        });
        result = await result.json();
        console.log(result);
    }
    return (
        <div>
            <h1>Employee update page</h1>
            <input type="text" placeholder="Enter Name" value={name} className="border-2 border-black p-2 m-2"  onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Age" value={age} className="border-2 border-black p-2 m-2" onChange={(e)=>setAge(e.target.value)} />
            <input type="text" placeholder="Enter Company" value={company} className="border-2 border-black p-2 m-2" onChange={(e)=>setCompany(e.target.value)}/>
            <button className="px-4 py-2 bg-[#000fff] text-[#ffffff]" onClick={UpdateUser}>update</button>
        </div>
    )
}
export default UpdateUser;