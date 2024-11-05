import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    organisation: "",
    delegates: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted!");
  };

  return (
    <section id="register" className="py-10 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Register Now</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-md"
      >
        {" "}
        {/* Adjusted max width */}
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="contactNo"
          type="tel"
          placeholder="Contact No."
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="organisation"
          type="text"
          placeholder="Organisation"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="delegates"
          type="number"
          placeholder="No. of Delegates"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
