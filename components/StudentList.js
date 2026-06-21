import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  return (
    <section className="flex flex-wrap w-full">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  );
}