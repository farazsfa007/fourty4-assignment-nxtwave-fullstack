import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import AddUser from "./pages/AddUser";
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </div>
    </main>
  </>
);
}

export default App;
