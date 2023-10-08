const Admission = () => {
  return (
    <div className="hero  bg-base-200 max-w-6xl mx-auto rounded-lg my-10">
      <div className="hero-content  lg:w-full">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 p-0 md:p-10">
          <div className="overflow-x-auto ">
            <table className="table grid grid-cols-1">
              {/* head */}
              <thead>
                <tr>
                  <h2 className="text-3xl md:text-5xl font-semibold px-3 text-[#4E9BD8] ">Admission Schedule</h2>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="text-xl">
                  <td>
                    <b>Online Admission Form open</b>
                  </td>
                  <td>: October 04, 2023 (Wednesday)</td>
                </tr>
                {/* row 2 */}
                <tr className="text-xl">
                  <td>
                    <b>Deadline for Online Admission Form Submission </b>
                  </td>
                  <td>: November 05, 2023 (Sunday) [Till 03:00 PM]</td>
                </tr>
                {/* row 3 */}
                <tr className="text-xl">
                  <td>
                    <b>Deadline for Online Admission Form Payment</b>{" "}
                  </td>
                  <td>: November 07, 2023 (Tuesday) [Till 03:00 PM] </td>
                </tr>
                {/* row 4 */}
                <tr className="text-xl">
                  <td>
                    <b>Admission & Registration</b>{" "}
                  </td>
                  <td>
                    : November 21 - 27, 2023 (Except Friday, Saturday & Govt.
                    Holidays){" "}
                  </td>
                </tr>
                {/* row 5 */}
                <tr className="text-xl">
                  <td>
                    <b>Orientation</b>
                  </td>
                  <td>: specific schedule will be published later.</td>
                </tr>
                {/* row 6 */}
                <tr className="text-xl">
                  <td>
                    <b>Class Starts</b>
                  </td>
                  <td>: January 21, 2024 (To be Confirmed)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
