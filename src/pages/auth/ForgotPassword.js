import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      props.history.push("/");
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setIsLoading(false);
        toast.success("Check your email for a password rest link");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.message);
      });
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {isLoading ? (
        <h4 className="text-danger">Loading</h4>
      ) : (
        <h4>Forgot Password?</h4>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={emailChangeHandler}
          placeholder="Enter Your Email"
          autoFocus
        />
        <br />
        <button className="btn btn-raised" disabled={!email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
