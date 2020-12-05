import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        phonNumber:'',
        email: '',
        message:'',
    });

    const InputEvent = (event) =>{
        const {name, value} =event.target;
        setData ((preVal) => {
            return{
            ...preVal,[name]:value,
            };
        });
    };

const formSubmit = (e) =>{
e.preventDefault();
alert(`${data.fullname}`);
};

    return(
        <>
        <div className="my-5">
        <h1>Welcome to contact page</h1>
        </div>
        <div className ="container contact-div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
  <input type="email" className="form-control" id="exampleFormControlInput2" name="pnumber" value={data.phonNumber} onChange={InputEvent} placeholder="Enter Your phone Number" />
  
</div>


<div className="mb-3">
  <label for="exampleFormControlInput3" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput3" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
</div>


<div className="mb-3">
  <label for="exampleFormControlTextarea4" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea4" name="msg" value={data.message} onChange={InputEvent} rows="3"></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                </form>
            </div>
        </div>
        </div>
        </>
    );
};
export default Contact;