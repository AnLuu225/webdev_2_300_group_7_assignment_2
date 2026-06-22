// import StudentCardComponent from "./components/StudentCard";


// export default function Home() {
//   return (
//     <div className="">
//       <main className="">
//         <StudentCardComponent />
//       </main>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

import studentsData from "../_data/students.json";
import StudentList from "../components/StudentList";
import AddStudentForm from "../components/AddStudentForm";

export default function Home() {

  const [students, setStudents] = useState(studentsData);

  function addStudent(newStudent: any) {
    setStudents([...students, newStudent]);
  }
  return(
   <main>
      <div className="flex flex-wrap w-full h-28 bg-gray-100 items-center p-4 mb-5">
        <h2 className="w-full text-5xl font-bold">Student List</h2>
        <h5 className="w-full text-lg italic text-gray-700">
          Student portal for New Generation High School
        </h5>
      </div>

      <StudentList students={students} />
      <AddStudentForm addStudent={addStudent} />
    </main>
  );
}
