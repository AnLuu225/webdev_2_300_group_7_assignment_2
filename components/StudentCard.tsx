export default function StudentCard({ student }: { student: any }) {
  return (
    <div className="w-80 h-45 bg-gray-100 rounded-2xl m-4">
      <h3 className="w-full h-15 bg-gray-200 rounded-t-2xl font-bold text-3xl flex items-center pl-4">
        {student.firstName} {student.lastName}
      </h3>
      <div className="p-4">
        <p className="text-xl font-bold italic text-gray-400">Student Information: </p>
        <p className="text-lg"><b>Date of Birth:</b> {student.dob}</p>
        <p className="text-lg"><b>Grade:</b> {student.grade}</p>
      </div>
    </div>
  );
}