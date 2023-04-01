// import './App.css';
import React, { useState } from 'react';

function Payment() {
  const [amount, setamount] = useState('');

  const handleChange=(e)=>{
  setamount(
       e.target.value
    )
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_sWjTzdPs0euyEJ",
        key_secret: "mLBTUgiOH5AaLtfBHX7YXJFU",
        amount: amount * 100,
        currency: "INR",
        name: "Payment Process",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Raghav",
          email: "vr@gmail.com",
          contact: "9025741101"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    // <div className="App">
    //  <h2>Razorpay Payment Integration Using React</h2>
    //  <br/>
    //  <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
    //  <br/><br/>
    //  <button onClick={handleSubmit}>Pay Now</button>
    // </div>
    <div className='container'>

      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Start Payment Process</h5>
          <div class="row g-3 align-items-center">
            {/* <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">Enter Amount:</label>
            </div> */}
            <div class="col-auto">
              {/* <input type="text" id="inputPassword6" value={amount} onChange={(e)=>setamount(e.target.value)} class="form-control" aria-describedby="passwordHelpInline"/>
   <input type="radio" value="100" />100 */}
              <input type="radio" value="100" id="male"
                onChange={handleChange} name="gender" />
              <label>silver plan will be ₹100/month</label>
<br></br>
              <input type="radio" value="1000" id="female"
                onChange={handleChange} name="gender" />
              <label>Gold plan will be ₹1000/month</label>
            </div>
          </div>
          {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
          <a href="#" class="btn btn-primary" onClick={handleSubmit}>Pay Now</a>
        </div>
      </div>
    </div>


  );
}

export default Payment;