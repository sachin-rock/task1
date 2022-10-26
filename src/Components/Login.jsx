import React from "react";
import "./Login.css";
import img from "../Images/img.png";




const Login = () => {
  return (
    <div>
      <div className="container">
        <img src={img} alt="" />
        <section>Personal Account</section>
        <h3>Andrew@polka.io</h3>
        <label>Password</label><br />
        <input className="input" type="password"  placeholder="andrew@polka" />
        <p>Forgot password?<a href=""><b>Reset</b></a></p><br />
        <input type = "checkbox" /> Stay signed in  <button className="btn">Submit</button>
        <hr />
        <section> This site is protected by reCAPTCHA and the Google</section>
       <p>Privacy Policy and Terms of Service apply</p>

      </div>
    </div>
  );
};

export default Login;
