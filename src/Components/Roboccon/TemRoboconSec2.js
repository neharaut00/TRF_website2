import React from "react";
import "./tempsec2.css";
import RoboconImg2 from "../../assets/RoboconImg2.png";
import RoboconImg3 from "../../assets/RoboconImg3.png";
import RoboconImg4 from "../../assets/RoboconImg4.png";

export default function TemRoboconSec2() {
  return (
    <section className="roboconpagesec2">
      <div className="roboconseccard0">
        <div className="verticallinerobocon1"></div>
        Robocon (short for Robotic Contest) is organized by Asia-Pacific
        Broadcasting Union (ABU), a collection of over 20 countries of Asia
        Pacific Region. NHK, Japan had already been organizing such contests at
        national level and also became the host of the first ABU Robocon in
        2002.Since then, every year one of the member broadcasters hosts this
        international event.
      </div>

      <div className="roboconseccard1">
        <div className="roboconseccard1subdiv1">
          <div className="verticlelinedivcard1">
            <div className="verticallinerobocon"></div>
            <div>
              <h1 className="year">
                <span>2021</span>
              </h1>
              <span className="robocon">
                <p>ROBOCON</p>
              </span>
            </div>
          </div>
          <br />
          <p className="textcard1">
            The Robotics Forum, VIT Pune participated in DD Robocon 2021 and we
            successfully cleared stage 1 and stage 2. ABU Robocon 2021 contest
            was based on the traditional game of East Asian countries pitch-pot
            or throwing arrows to a pot. In this game, each team designs two
            robots. One robot can pick up arrows and throw them to the five pots
            located on the field but is restricted to the outer area of RS
          </p>
        </div>
        <div className="roboconseccard1subdiv2">
          <img src={RoboconImg2} className="roboconsec2cardimage1" alt="" />
        </div>
      </div>

      <br />
      <br />
      {/* ... */}
      <div className="roboconseccard2">
        <div className="roboconseccard2subdiv1">
          <div className="verticlelinedivcard2">
            <div className="verticallinerobocon"></div>
            <div>
            <h1 className="year">
                <span>2020</span>
              </h1>
              <span className="robocon">
                <p>ROBOCON</p>
              </span>
            </div>
          </div>
          <br />
          <div className="textcard2">
          <p>
            The ABU Robocon 2020 Suva contest is to play rugby 7's game using
            two robots and five obstacles as five defending players. The
            highlight of this game is how the two robots collaborate to score
            Try and the Goal Kick. The main and unique challenge of this game
            will be Goal Kick, kicking the Kick Ball over the crossbar of the
            conversion post because of the unique shape of the rugby ball. J:
          </p>
          </div>
        </div>
        <div className="roboconseccard2subdiv2">
          <img src={RoboconImg3} className="roboconsec2cardimage2" alt="" />
        </div>
      </div>

      {/* ... */}
      <br />
      <br />

      <div className="roboconseccard3">
        <div className="roboconseccard3subdiv1">
          <div className="verticlelinedivcard3">
            <div className="verticallinerobocon"></div>
            <div>
            <h1 className="year">
                <span>2019</span>
              </h1>
              <span className="robocon">
                <p>ROBOCON</p>
              </span>
            </div>
          </div>
          <br />
          <p>
            The ABU Robocon 2020 Suva contest is to play rugby 7's game using
            two robots and five obstacles as five defending players. The
            highlight of this game is how the two robots collaborate to score
            Try and the Goal Kick. The main and unique challenge of this game
            will be Goal Kick, kicking the Kick Ball over the crossbar of the
            conversion post because of the unique shape of the rugby ball.{" "}
          </p>
        </div>
        <div className="roboconseccard3subdiv2">
          <img src={RoboconImg4} className="roboconsec2cardimage3" alt="" />
        </div>
      </div>
    </section>
  );
}