"use client";

import { useState } from "react";

export default function AddStudentForm({ addStudent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !dob || !grade.trim()) {
      alert("Please complete all fields.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      firstName,
      lastName,
      dob,
      grade,
    };

    addStudent(newStudent);

    setFirstName("");
    setLastName("");
    setDob("");
    setGrade("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={dob}
        onChange={(event) => setDob(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(event) => setGrade(event.target.value)}
      />

      <br />
      <br />

      <button type="submit">Add Student</button>
    </form>
  );
}