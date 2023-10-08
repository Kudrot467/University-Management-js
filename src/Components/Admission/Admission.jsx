const Admission = () => {
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto my-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <h2 className="text-5xl font-semibold">Admission Schedule</h2>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <td>Online Admission Form open</td>
            <td>: October 04, 2023 (Wednesday)</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>Deadline for Online Admission Form Submission </td>
            <td>: November 05, 2023 (Sunday) [Till 03:00 PM]</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>Deadline for Online Admission Form Payment </td>
            <td>: November 07, 2023 (Tuesday) [Till 03:00 PM] </td>
          </tr>
          {/* row 4 */}
          <tr>
            <td>Admission & Registration </td>
            <td>
              : November 21 - 27, 2023 (Except Friday, Saturday & Govt.
              Holidays){" "}
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <td>Orientation</td>
            <td>: specific schedule will be published later.</td>
          </tr>
          {/* row 6 */}
          <tr>
            <td>Class Starts</td>
            <td>: January 21, 2024 (To be Confirmed)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admission;
