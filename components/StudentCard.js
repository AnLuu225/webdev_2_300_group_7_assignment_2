export default function StudentCard({ student }) {
  return (
    <div>
      <h3>
        {student.firstName} {student.lastName}
      </h3>
      <p>Date of Birth: {student.dob}</p>
      <p>Grade: {student.grade}</p>
      <hr />
    </div>
  );
}