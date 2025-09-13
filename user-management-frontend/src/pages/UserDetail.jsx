import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api/users";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 space-y-2">
    <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
    <div className="text-gray-600">
        <p><span className="font-semibold text-blue-700">Email:</span> {user.email}</p>
        <p><span className="font-semibold text-blue-700">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold text-blue-700">Company:</span> {user.company?.name}</p>
        <p><span className="font-semibold text-blue-700">City:</span> {user.address?.city}</p>
        <p><span className="font-semibold text-blue-700">Zipcode:</span> {user.address?.zipcode}</p>
        <p>
        <span className="font-semibold text-blue-700">Geo:</span>{" "}
        <span className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{user.address?.geo?.lat}, {user.address?.geo?.lng}</span>
        </p>
    </div>
    </div>
    );
}
