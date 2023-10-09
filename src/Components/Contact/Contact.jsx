const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
                <legend className="text-4xl text-[#4E9BD8] underline"> Contact Us</legend>
              <table>
                <tr>
                  <td>
                    <p className="text-xl"><b>Email</b></p>

                    <p className="text-xl"><b>Phone/Mobile</b></p>

                    <p className="text-xl"><b>Website</b></p>
                    

                    <p className="text-xl"><b>Present Address</b></p>
                  </td>
                  <td>
                    <p className="text-xl">:info@learning.academy</p>

                    <p className="text-xl">:+880-01518XXXXXX</p>
 
                    <p className="text-xl">:https://learning.edu</p>

                    <p className="text-xl">:408/1, Kuratoli, Khilkhet, Dhaka 1229, Bangladesh</p>
                  </td>
                </tr>
              </table>
            
        </div>
    );
};

export default Contact;