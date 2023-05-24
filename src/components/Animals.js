import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Animals.css";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const { hash } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const togglePopup = (content) => {
    setShowPopup(!showPopup);
    setPopupContent(content);
  };

  useEffect(() => {
    const id = hash.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  useEffect(() => {
    fetch("http://localhost/php-react/Project/Aff/affall.php")
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="Animalpage">
        <section>
          <h1 className="app_prod3">Here is all the available animals</h1>
          <div className="pageanim">
            <h2  className="sectitle">DOGs</h2>
            <div className="anim" id="Dogs">
              {animals.map((animal, index) => {
                if (animal.type === "dog" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />

                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">CATs</h2>
            <div className="anim" id="Cats">
              {animals.map((animal, index) => {
                if (animal.type === "cat" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />

                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">PIGs</h2>
            <div className="anim" id="Pigs">
              {animals.map((animal, index) => {
                if (animal.type === "pig" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />

                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button
                            className="seemorebut"
                            onClick={() => togglePopup(animal)}
                          >
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">MONKEYs</h2>
            <div className="anim" id="Monkeys">
              {animals.map((animal, index) => {
                if (animal.type === "monkey" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />

                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button className="seemorebut" onClick={() => togglePopup(animal)}>
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">BIRDs</h2>
            <div className="anim" id="Birds">
              {animals.map((animal, index) => {
                if (animal.type === "bird" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />

                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button className="seemorebut" onClick={() => togglePopup(animal)}>
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <h2 className="sectitle">HAMSTERs</h2>
            <div className="anim" id="Hamsters">
              {animals.map((animal, index) => {
                if (animal.type === "hamster" && index < 10) {
                  return (
                    <div className="animal" key={animal.id}>
                      <h2>{animal.name}</h2>
                      <img
                        className="animalimg"
                        alt={animal.name}
                        src={animal.image}
                      />

                      <p>Race : {animal.race}</p>
                      <p>Age : {animal.age} Years</p>
                      <div className="description">
                        <p className={showPopup ? "expanded" : ""}>
                          Story : {animal.description}
                        </p>
                        {animal.description.length > 10 && (
                          <button className="seemorebut" onClick={() => togglePopup(animal)}>
                            See More
                          </button>
                        )}
                      </div>
                      <div>
                        <br />
                      </div>
                      <h5>{animal.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    <button className="close-popup" onClick={togglePopup}>
                      x
                    </button>
                    <br />
                    {popupContent && (
                      <div className="popshiish">
                        <h2>{popupContent.name}</h2>
                        <img
                          className="popup-image"
                          alt={popupContent.name}
                          src={popupContent.image}
                        />
                        <p>
                          Race: {popupContent.race}
                          <br />
                          Age: {popupContent.age} Years
                          <br />
                          Description: {popupContent.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Animals;
