import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
            <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors">
            User Dashboard
            </Link>
            <Link
            to="/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition-all font-medium"
            >
            + Add User
            </Link>
        </div>
        </nav>
    );
}
