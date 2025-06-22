async function getEmployee(empId: string) {
  const res = await fetch(`http://localhost:3000/api/employees/${empId}`);  
  const data = await res.json();
  return data;
}


interface EmpDetailsProps {
    params: {
        empId: string;
    };
}

const EmpDetails = async ({ params }: EmpDetailsProps) => {
    const employee = await getEmployee(params.empId)
    return (
        <div>
            <h2>Name:{employee.name}</h2>
            <div>Summary:{employee.summary}</div>
        </div>
    )

}
export default EmpDetails;