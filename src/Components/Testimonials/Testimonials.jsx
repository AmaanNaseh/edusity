import React, { useRef } from "react";
import "./Testimonials.css";
import backIcon from "../../assets/back-icon.png";
import nextIcon from "../../assets/next-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; // translate x initial value

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}% )`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}% )`;
  };

  return (
    <div className="testimonials">
      <img
        src={nextIcon}
        alt="next icon"
        className="next__btn"
        onClick={slideForward}
      />
      <img
        src={backIcon}
        alt="back icon"
        className="back__btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user__info">
                <img src={user1} alt="user 1" />
                <div>
                  <h3>Allumni</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user__info">
                <img src={user2} alt="user 2" />
                <div>
                  <h3>Allumni</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user__info">
                <img src={user3} alt="user 3" />
                <div>
                  <h3>Allumni</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user__info">
                <img src={user4} alt="user 4" />
                <div>
                  <h3>Allumni</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
