export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Student Manager</h1>

      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-200">Home</a>
        <a href="#students" className="hover:text-blue-200">Students</a>
        <a href="#add-student" className="hover:text-blue-200">Add Student</a>
      </div>
    </nav>
  );
}
