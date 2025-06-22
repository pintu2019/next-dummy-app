import Link from "next/link";
import DeleteUser from "../../../components/button";

type Employee = {
  empId: string;
  name: string;
  age: number;
  company: string;
};

async function getEmployees(): Promise<Employee[]> {
  const res = await fetch('http://localhost:3000/api/employees');  
  const data = await res.json();
  return data.employees;
}

const EmpoyeesPage = async () => {
  const employees = await getEmployees();
  
  return (
    <div>
      <h1 className="text-center text-2xl underline">Employees Page</h1>
      {employees.map((emp: Employee) =>{
        return(
          <div key={emp.empId} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <Link href={`employees/${emp.empId}`}><h2>Name: {emp.name}</h2></Link>
            <p>Employee ID: {emp.empId}</p>
            <p>Age: {emp.age}</p>
            <p>company: {emp.company}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"><Link href={`employees/${emp.empId}/update`}>Edit</Link></button>
            <DeleteUser empId={emp.empId}/>
          </div>
        )
      })}
    </div>
  );
}
export default EmpoyeesPage;