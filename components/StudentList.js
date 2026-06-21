import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  return (
    <section>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  );
}