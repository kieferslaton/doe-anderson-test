import React, { useState } from "react";

const Contact = ({ user }) => {
  //Storing form data
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Storing whether form has successfully been submitted
  const [isSubmit, setIsSubmit] = useState(false);

  //Storing errors globally so the forms can conditionally add classes
  const [errors, setErrors] = useState([]);

  //State for error message, initialize as empty
  const [errorMsg, setErrorMsg] = useState(null);

  //Handling form change
  const handleChange = (e) => {
    //Destructure the data from the event target
    let { name, value } = e.target;
    //Use spread operator to set only target that's being changed
    setForm({ ...form, [name]: value });
  };

  const errorCheck = () => {
    //Initialize empty errors array
    let errors = [];

    //Iterate through each item in the form object. If the property related to that key is empty, it will push the key name to the errors array.
    Object.keys(form).forEach((key) => {
      if (form[key] === "") {
        errors.push(key);
      }
    });

    //Pass the errors array to the submit function.
    setErrors(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    //Prevent page from reloading
    e.preventDefault();
    //Error checking, set errors and return
    let errors = errorCheck();
    //If there are any errors, set a helper message and don't submit the form.
    if (errors.length > 0) {
      setErrorMsg("One or more required fields is missing.");
      return;
    }
    //Code to successfully submit the form would go here. For this exercise we'll just console.log it
    console.log(form);
    //Display the submit success message to the user and clear the form (and error message) in case they go back
    setIsSubmit(!isSubmit);
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setErrorMsg(null);
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      {isSubmit ? (
        <div className="row wrap w-100">
          <p className="w-100">
            Thanks for reaching out! {user.name} will be in touch.
          </p>
          <button className="w-100" onClick={() => setIsSubmit(!isSubmit)}>
            Go Back
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            /*Only going to comment on one of these - I want the field to turn red if there's an error and change back to black the 
            second we add any text to it, so I'm going to use a double conditional that checks whether a) The errors array contains
            the value and b) Whether the form object has any text in it at this key. If so, add an error class. 
            */
            className={`
            ${errors.includes("name") && !form.name.length ? "error" : ""}
            w-100`}
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={`
            ${errors.includes("email") && !form.email.length ? "error" : ""}
            w-100`}
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="How can I help?"
            className={`
            ${errors.includes("message") && !form.message.length ? "error" : ""}
            w-100`}
            rows={6}
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="w-100">
            Submit
          </button>
          {errorMsg ? (
            <small className="w-100 error-message">{errorMsg}</small>
          ) : (
            ""
          )}
        </form>
      )}
    </div>
  );
};

export default Contact;
