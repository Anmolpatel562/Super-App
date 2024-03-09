import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import "./Register.css";
import RegistrationFormImg from "../images/registerform.png";

function Register() {
  return (
    <div className="Register">
      <img className="img" src={RegistrationFormImg} alt="anmo" />
      <RegistrationForm />
    </div>
  );
}
export default Register;
