const Schedule = () => (
  <section id="schedule" className="py-10 px-4 bg-gray-100">
    <h2 className="text-2xl font-bold mb-4 text-center">Event Schedule</h2>
    <div className="max-w-3xl mx-auto">
      <ul className="space-y-4">
        <li className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-semibold">March 15</h3>
          <p>
            Opening Keynote:{" "}
            <span className="font-bold">The Future of E-commerce</span>
          </p>
        </li>
        <li className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-semibold">March 16</h3>
          <p>Panel Discussions</p>
        </li>
        <li className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-semibold">March 17</h3>
          <p>Workshop Sessions</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Schedule;
