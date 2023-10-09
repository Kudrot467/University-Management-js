const Regulations = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-2xl font-medium text-white bg-[#4E9BD8]">
          Semester System
        </div>
        <div className="collapse-content">
          <p className="text-xl">
            The academic year of the university incorporates two regular
            semesters and one optional semester. The duration of all semesters
            is 14 weeks.
          </p>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-xl font-semibold">
                <tr>
                  <th></th>
                  <th>Semester</th>
                  <th>From</th>
                  <th>Till</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Spring</td>
                  <td>January</td>
                  <td>April</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Summer</td>
                  <td>May</td>
                  <td>August</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Fall</td>
                  <td>September</td>
                  <td>December</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-2xl font-medium text-white bg-[#4E9BD8]">
          Teaching System
        </div>
        <div className="collapse-content">
          <p>
          The medium of instruction for all academic programs at Learning Academy is English. Each course focuses on the intellectual development of the students, and incorporates a variety of teaching methods in order to make the students proficient in the course. This ranges from case analysis, project work, presentations, research, group assignments, as well as various forms of competitions and simulations, etc. This holistic approach enables students to build their analytical abilities, develop professionalism and team work, as well as practically apply theoretical knowledge to derive innovative solutions for challenges and uncertainties, all of which are essential to thrive and survive in the real-life opportunities of the job market, in Bangladesh and around the world today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
