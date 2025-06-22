import Link from "next/link";
const studentList = [
  { id: 1, name: "Alice Johnson", age: 20, major: "Computer Science" },
  { id: 2, name: "Bob Smith", age: 22, major: "Mathematics" },
  { id: 3, name: "Clara Lee", age: 19, major: "Physics" },
  { id: 4, name: "David Kim", age: 21, major: "Chemistry" },
  { id: 5, name: "Eva Brown", age: 23, major: "Biology" }
];
const StudentList = () =>{
    return (
        <div>
            <h1>Student List</h1>
            <ul>
               {studentList.map((student) =>{
                   return (
                    <li key={student.id}>
                       <Link href={`/studentlist/${student.id}`}>{student.name}</Link>
                    </li>
                   )
               })}
            </ul>
        </div>
    )
}
export default StudentList;