"use client";

interface DeleteUserProps {
  empId: string;
}

const DeleteUser = (props: DeleteUserProps) => {
  const empId = props.empId;
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/api/employees/${empId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result.success) {
      alert("Employee is deleted successfully");
    }
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDelete}
    >
      Delete Employee
    </button>
  );
};
export default DeleteUser;
