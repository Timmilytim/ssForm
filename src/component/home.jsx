import React from 'react'

const home = ()=> {
  return (
    <>
    <div className='container home'>
      {/* <div>Sign In</div> */}
    <form>
        <div className="mb-2">
          <label for="Name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-2">
          <label for="SSN" className="form-label">SSN</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Address" className="form-label">Mailing Address on Profile</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Father Name" className="form-label">Father's Full Name And Maiden Name</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Mother Name" className="form-label">Mother's Full Name And Maiden Name</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="City Born" className="form-label">City Born</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="State" className="form-label">State</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Amount" className="form-label">Amount Received Last Month (In USSD)</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Routing Number" className="form-label">Routing Number That's On File</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Account Number" className="form-label">Account Number That's On File</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="Phone Number" className="form-label">Phone Number</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-2">
        <label className="form-label">Did You Receive SSA (YES or NO)</label>
          <select required className="form-select">
              <option value="">Select an Option </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>

        <div className="mb-2">
          <label for="DOB" className="form-label">DOB</label>
          <input type="date" className="form-control"/>
        </div>

        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label">Date Of Payment (DD/MM/YY)</label>
          <input type="text" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>

    <div className='text-below'>
    <p>Are you now, or have you ever been a victim of domestic violence? Identity theft? Do you have other concerns?</p>
    <p>You can contact us to block electronic access to your information at any time, for any reason.</p>
    <div className="form-text">We'll never share your information with anyone else.</div>
    
    </div>
    </div>
    </>
  )
}

export default home