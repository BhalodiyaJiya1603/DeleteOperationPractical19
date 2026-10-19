
import { useState } from "react";
import StudentList from "./Components/StudentList";

const studentData = [
 { id: 1, rollNo: 'CS101', name: 'Aarav Sharma', email: 'aarav@example.com', course: 'Computer Science' , marks: 85, semester: 3},
  { id: 2, rollNo: 'IT102', name: 'Ananya Patel', email: 'ananya@example.com', course: 'Information Tech', marks: 90, semester: 2},
  { id: 3, rollNo: 'EC103', name: 'Rohan Verma', email: 'rohan@example.com', course: 'Electronics' , marks: 78, semester: 4},
  { id: 4, rollNo: 'CS104', name: 'Priya Iyer', email: 'priya@example.com', course: 'Computer Science', marks: 92, semester: 1},
  { id: 5, rollNo: 'ME105', name: 'Karan Singh', email: 'karan@example.com', course: 'Mechanical', marks: 88, semester: 2 },
];

function App() {
  const [students, setStudents] = useState(studentData);
  const [message, setMessage] = useState("");

  const deleteStudent = (id) => {
    const selected = students.find((s) => s.id === id);

    if (!selected) return;

    if (window.confirm(`Delete ${selected.name}?`)) {
      setStudents((previous) =>
        previous.filter((s) => s.id !== id)
      );
      setMessage(`${selected.name} deleted successfully!`);
    }
  };

  const restoreStudents = () => {
    setStudents(studentData);
    setMessage("Student records restored successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 rounded-xl bg-indigo-700 p-6 text-white shadow-lg">
          <h1 className="text-3xl font-bold">🎓 EduTrack</h1>
          <p className="mt-2">Student Management System</p>
        </header>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Total Students</p>
            <h2 className="text-3xl font-bold text-indigo-600">
              {students.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">BCA Students</p>
            <h2 className="text-3xl font-bold text-purple-600">
              {students.filter((s) => s.course === "BCA").length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Average Marks</p>
            <h2 className="text-3xl font-bold text-green-600">
              {students.length
                ? Math.round(
                    students.reduce((sum, s) => sum + s.marks, 0) /
                      students.length
                  ) + "%"
                : "0%"}
            </h2>
          </div>
        </div>

        {message && (
          <p className="mb-4 rounded-lg bg-green-100 p-4 text-green-800">
            ✓ {message}
          </p>
        )}

        <StudentList
          students={students}
          onDelete={deleteStudent}
          onRestore={restoreStudents}
        />
      </div>
    </div>
  );
}

export default App;
