import "./App.css";
import { useState } from "react";

function App() {
  const[formData, setformData]= useState({
    firstName:"",lastName:"",email:"",country:"India",streetAddress:"",
    city:"",state:"",postalCode:"", comments:false, 
    candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event){
    const{name,value,checked,type}= event.target;
    setformData( (prev)=>({
      ...prev,
      [name]:type==="checkbox" ? checked: value
    })
  )
    
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing value of form data");
    console.log(formData);
  }

  return (
   <div className="flex flex-col items-center mt-2">

    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <br></br>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Enter you name..."
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
      />

      <br></br>
      <label htmlFor="lastName">Last Name</label>
      <br></br>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Enter you last name..."
        value={formData.lastNameName}
        onChange={changeHandler}
        className="outline"
      />

      <br></br>
       <label htmlFor="email">Email Address</label>
      <br></br>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter you email..."
        value={formData.email}
        onChange={changeHandler}
        className="outline"
      />

      <br></br>
      <label htmlFor="country">Country</label>
      <br></br>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>

      </select>


      <br></br>
      <label htmlFor="streetAddress">Street Address</label>
      <br></br>
      <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="Enter you street address here..."
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
      />

<br></br>
      <label htmlFor="city">City</label>
      <br></br>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Enter you city ..."
        value={formData.city}
        onChange={changeHandler}
        className="outline"
      />

<br></br>
      <label htmlFor="state">State</label>
      <br></br>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="Enter you state ..."
        value={formData.state}
        onChange={changeHandler}
        className="outline"
      />

<br></br>
      <label htmlFor="postalCode">POstal Code</label>
      <br></br>
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="Enter you postalCode ..."
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
      />

      <br></br>
      <br></br>
      <fieldset>
        <legend>By Email</legend>

        <div className="flex">
        <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        />
        <div>
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someone posts a comment on a posting.</p>
        </div>
        </div>

        <div className="flex">
        <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
        />
        <div>
          <label htmlFor="candidates">candidates</label>
          <p>Get notified when someone a candidate applies for a job</p>
        </div>
        </div>


        <div className="flex">
        <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
        />
        <div>
          <label htmlFor="offers">Offers</label>
          <p>Get notified when candidate accepts or rejecta a offer .</p>
        </div>
        </div>
        
      </fieldset>

      <br></br>
      <br></br>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered by sms to your mobile number</p>

        <input
        type="radio"
        id="pushEverything"
        name="pushNotification"
        value="Everything"
        onChange={changeHandler}
        />
        <label htmlFor="pushEverything">Everything</label>


        <br></br>
        <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
        />
        <label htmlFor="pushEmail">Same as email</label>

        <br></br>

        <input
        type="radio"
        id="pushNothing"
        name="pushNotification"
        value="No Push Notification"
        onChange={changeHandler}
        />
        <label htmlFor="pushNothing">No Push Notification</label>

      </fieldset>


      <button className="rounded bg-blue-500 text-white font-bold py-2 px-4 ">Save</button>

    </form>
   </div>
  );
}

export default App;
