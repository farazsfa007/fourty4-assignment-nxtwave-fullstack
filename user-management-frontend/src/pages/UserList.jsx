import { useEffect, useState, useCallback } from "react";
import { getUsers, deleteUser } from "../api/users";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchUsers = useCallback(async () => {
    const res = await getUsers({ q: search, page, limit: 5 });
    setUsers(res.data.data);
  }, [search, page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold mb-6 text-blue-800">Users</h1>
    <input
      type="text"
      placeholder="Search users with name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border-gray-300 border focus:ring-2 focus:ring-blue-500 transition px-3 py-2 mb-4 w-full rounded"
    />
    <div className="overflow-x-auto rounded">
      <table className="min-w-full table-auto bg-white">
        <thead>
          <tr className="bg-blue-50 text-blue-800">
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            <th className="px-4 py-2 text-left font-semibold">Email</th>
            <th className="px-4 py-2 text-left font-semibold">Company</th>
            <th className="px-4 py-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-b hover:bg-blue-50 transition">
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.company?.name}</td>
              <td className="px-4 py-2 flex flex-wrap gap-2">
                <Link to={`/users/${u._id}`} className="text-blue-600 hover:underline">View</Link>
                <button
                  onClick={() => handleDelete(u._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex items-center gap-3 mt-6 justify-end">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
      >
        Prev
      </button>
      <span className="text-gray-700 font-medium">Page {page}</span>
      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
      >
        Next
      </button>
    </div>
  </div>

  );
}
