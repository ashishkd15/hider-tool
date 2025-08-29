import { useEffect, useState } from "react";

export default function ApiData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 mt-3 border rounded-lg shadow w-full max-w-4xl mx-auto">
      <h3 className="font-bold text-lg mb-3">Users from API</h3>

      <table className="table-fixed border-collapse border border-gray-500 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 px-4 py-2">ID</th>
            <th className="border border-gray-500 px-4 py-2">Name</th>
            <th className="border border-gray-500 px-4 py-2">Email</th>
            <th className="border border-gray-500 px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="hover:bg-gray-100">
              <td className="border border-gray-500 px-4 py-2">{u.id}</td>
              <td className="border border-gray-500 px-4 py-2">{u.name}</td>
              <td className="border border-gray-500 px-4 py-2">{u.email}</td>
              <td className="border border-gray-500 px-4 py-2">{u.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
