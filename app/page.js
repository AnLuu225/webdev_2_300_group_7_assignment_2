"use client";

import { useState } from "react";

import studentsData from "../data/students.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentList from "../components/StudentList";
import AddStudentForm from "../components/AddStudentForm";

export default function Home() {
  const [students, setStudents] = useState(studentsData);

  function addStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  return (
    <main>
      <Navbar />

      <h2>Student List</h2>

      <StudentList students={students} />

      <AddStudentForm addStudent={addStudent} />

      <Footer />
    </main>
  );
}