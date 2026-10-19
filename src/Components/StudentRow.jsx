
function StudentRow({ student, onDelete }) {
  const initials = student.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <tr className="border-b transition hover:bg-indigo-50">
      {/* Student Name */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              {student.name}
            </p>
            <p className="text-xs text-gray-500">
              Student Account
            </p>
          </div>
        </div>
      </td>

      {/* Student ID */}
      <td className="px-5 py-4 font-medium text-gray-600">
        #{student.id}
      </td>

      {/* Roll Number */}
      <td className="px-5 py-4 font-medium text-gray-600">
        {student.rollNo}
      </td>

      {/* Email */}
      <td className="px-5 py-4 text-sm text-gray-600">
        {student.email}
      </td>

      
      {/* Course */}
      <td className="px-5 py-4">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
          {student.course}
        </span>
      </td>

      {/* Semester */}
      <td className="px-5 py-4 text-gray-600">
        Semester {student.semester}
      </td>

      {/* Marks */}
      <td className="px-5 py-4 font-bold text-green-700">
        {student.marks}%
      </td>

      {/* Delete Button */}
      <td className="px-5 py-4">
        <button
          onClick={() => onDelete(student.id)}
          className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-700"
        >
          🗑 Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
