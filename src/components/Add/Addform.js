import React, { useState } from "react";
import "../Add/add.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Addform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the AJAX request
    fetch("http://localhost/php-react/login-php/form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("your question has been send");
        setTimeout(function () {
          window.location.reload();
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
    <Navbar />
      <ToastContainer />
      <div className="containerfor" id="form2" onSubmit={handleSubmit}>
        <form id="contact">
          <h3 >Here</h3>
          <h4>Fill this form</h4>
          <fieldset>
            <input
            className="feedback-input"
              placeholder="Your Pet Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
          <label>
        Choose an animal:
        <select >
          <option value="">Select an animal</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="pig">Pig</option>
          <option value="monkeys">Monkeys</option>
          <option value="hamsters">Hamsters</option>
        </select>
      </label>
          </fieldset>
          
          <fieldset>
            <input
            className="feedback-input"
              placeholder="Race"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
            className="feedback-input"
              placeholder="Age"
              type="number"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
            className="feedback-input"
              placeholder="Your Pet Color"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
            className="feedback-input"
              placeholder="Write his story"
              type="textarea"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
            className="feedback-input"
              placeholder="Your Pet Color"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <button
            className="subbut"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Addform;
