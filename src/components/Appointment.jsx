export default function Appointment() {
  return (
    <section className="appointment">

      <h2>Book Appointment</h2>

      <div className="form">

        <select>
          <option>Select Service</option>
          <option>Cataract</option>
          <option>LASIK</option>
        </select>

        <select>
          <option>Select Time</option>
        </select>

        <button>Confirm Appointment</button>

      </div>

    </section>
  );
}