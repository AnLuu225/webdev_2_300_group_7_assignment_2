"use client";

import { useState } from "react";

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  grade: number;
};

type AddStudentFormProps = {
  addStudent: (student: Student) => void;
};

export default function AddStudentForm({
  addStudent,
}: AddStudentFormProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [grade, setGrade] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !dob ||
      !grade.trim()
    ) {
      alert("Please complete all fields.");
      return;
    }

    const gradeNumber = Number(grade);

    if (isNaN(gradeNumber) || gradeNumber < 1 || gradeNumber > 12) {
      alert("Grade must be between 1 and 12.");
      return;
    }

    const newStudent: Student = {
      id: Date.now(),
      firstName,
      lastName,
      dob,
      grade: gradeNumber,
    };

    addStudent(newStudent);

    setFirstName("");
    setLastName("");
    setDob("");
    setGrade("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Student
      </h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        className="w-full border rounded p-3 mb-4"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        className="w-full border rounded p-3 mb-4"
      />

      <input
        type="date"
        value={dob}
        onChange={(event) => setDob(event.target.value)}
        className="w-full border rounded p-3 mb-4"
      />

      <input
        type="number"
        placeholder="Grade (1-12)"
        value={grade}
        onChange={(event) => setGrade(event.target.value)}
        className="w-full border rounded p-3 mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800"
      >
        Add Student
      </button>
    </form>
  );
}
