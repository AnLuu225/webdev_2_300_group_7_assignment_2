import StudentCard from "./StudentCard";

export type StudentType = {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  grade: number;
};


export function StudentList({ students }: {students: StudentType[]}) {
  return (
    <section className="flex flex-wrap w-full">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  );
}