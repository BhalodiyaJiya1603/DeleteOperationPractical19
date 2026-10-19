
import StudentRow from "./StudentRow";

function StudentList({ students, onDelete, onRestore }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Student Directory
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            View and manage student records
          </p>
        </div>

        <span className="rounded-lg bg-indigo-100 px-4 py-2 font-semibold text-indigo-700">
          {students.length} Records
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-100 text-sm uppercase text-gray-600">
            <tr>
              <th className="px-5 py-4">Student</th>
              <th className="px-5 py-4">ID</th>
              <th className="px-5 py-4">Roll No</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Course</th>
              <th className="px-5 py-4">Semester</th>
              <th className="px-5 py-4">Marks</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-5 py-12 text-center">
                  <div className="text-5xl">📭</div>
                  <h3 className="mt-3 text-xl font-bold text-gray-700">
                    No Students Found
                  </h3>
                  <p className="mt-2 text-gray-500">
                    All student records have been deleted.
                  </p>
                  <button
                    onClick={onRestore}
                    className="mt-5 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-800"
                  >
                    Restore Students
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="border-t bg-gray-50 px-6 py-4 text-sm text-gray-500">
        Showing {students.length} student records
      </div>
    </div>
  );
}

export default StudentList;
