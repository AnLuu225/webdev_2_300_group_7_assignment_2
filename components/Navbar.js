export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          New Generation High School
        </h1>

        <div className="space-x-6">
          <a href="#" className="hover:text-blue-200">
            Home
          </a>
          <a href="#" className="hover:text-blue-200">
            Students
          </a>
          <a href="#" className="hover:text-blue-200">
            Add Student
          </a>
        </div>
      </div>
    </nav>
  );
}
