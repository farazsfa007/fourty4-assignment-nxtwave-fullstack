import { useState } from "react";
import { createUser } from "../api/users";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
    const [form, setForm] = useState({
        name: "", email: "", phone: "",
        company: { name: "" },
        address: { street: "", city: "", zipcode: "", geo: { lat: 0, lng: 0 } }
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("company.")) {
        setForm({ ...form, company: { ...form.company, name: value } });
        } else if (name.startsWith("address.")) {
        const field = name.split(".")[1];
        setForm({ ...form, address: { ...form.address, [field]: value, geo: form.address.geo } });
        } else if (name.startsWith("geo.")) {
        const field = name.split(".")[1];
        setForm({
            ...form,
            address: {
            ...form.address,
            geo: { ...form.address.geo, [field]: parseFloat(value) }
            }
        });
        } else {
        setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(form);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg space-y-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Add User</h1>

        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Name" onChange={handleChange} autoComplete="off" />
        </div>
        
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Email" onChange={handleChange} autoComplete="off" />
        </div>
        
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Phone" onChange={handleChange} autoComplete="off" />
        </div>
        
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="company">Company</label>
            <input id="company" name="company.name" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Company" onChange={handleChange} autoComplete="off" />
        </div>

        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="street">Street</label>
            <input id="street" name="address.street" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Street" onChange={handleChange} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="city">City</label>
            <input id="city" name="address.city" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="City" onChange={handleChange} autoComplete="off" />
            </div>
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="zipcode">Zipcode</label>
            <input id="zipcode" name="address.zipcode" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Zipcode" onChange={handleChange} autoComplete="off" />
            </div>
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="lat">Latitude</label>
            <input id="lat" name="geo.lat" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Latitude" onChange={handleChange} autoComplete="off" />
            </div>
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="lng">Longitude</label>
            <input id="lng" name="geo.lng" className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Longitude" onChange={handleChange} autoComplete="off" />
            </div>
        </div>
        
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow transition-all">Save</button>
        </form>

    );
}
