"use client";

import { useState } from "react";
import { StudentType } from "./StudentList";

type AddStudentFormProps = {
  addStudent: (student: StudentType) => void;
};

export default function AddStudentForm({ addStudent }: AddStudentFormProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [grade, setGrade] = useState<number>(NaN);

  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !dob || 
      !grade
    ) {
      alert("Please complete all fields.");
      return;
    }

    if (!(/^[A-Za-z]+$/.test(firstName.trim())) ||
        !(/^[A-Za-z]+$/.test(firstName.trim()))) {
      alert("Please ensure First Name and Last Name only have alphabetical characters.");
      return;
    } else if (!(dob.trim())) {
      alert("Please ensure that the dob is chosen.");
      return;
    } else if ((isNaN(grade) || grade < 1 || grade > 12)) {
      // If one ever gets here then they deserve it lowkey :sob:
      alert("Please ensure that the grade is of 1-12.");
      return;
    }

    const newStudent: StudentType = {
      id: Date.now(),
      firstName,
      lastName,
      dob,
      grade: grade,
    };

    addStudent(newStudent);

    setFirstName("");
    setLastName("");
    setDob("");
    setGrade(NaN);

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
        onChange={(event) => {
          setGrade(Number(event.target.value))
        }}
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
