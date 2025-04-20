import React from "react";
import logo from "../assets/images/LogoBolivar.png";
import imageMain from "../assets/images/ImageMain.png";
import "./MainView.css";
import CarrouselCards from "./CarrouselCards.js";

export const MainView = () => {
  return (
    <div className="body">
      <div className="column1">
        <div>
          <img className="logo" src={logo} />
        </div>
      </div>
      <div className="column2">
        <div className="background-column2"></div>
        <img className="imageMain" src={imageMain}></img>
      </div>
      <div className="column3">
        <div className="main-area">
          <div className="nav-area">
            <nav className="nav">
              <ul className="row-nav">
                <li className="item-nav">
                  <a href="#">Inicio</a>
                </li>
                <li className="item-nav">
                  <a href="#">Menú</a>
                </li>
                <li className="item-nav">
                  <a href="#">Servicios</a>
                </li>
                <li className="item-nav">
                  <a href="#">Inicio</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="login-area">
            <input
              className="button-login"
              type="button"
              value="LOG IN"
            ></input>
          </div>
          <div className="content-area">
            <div className="presentation-area">
              <div className="subpresentation-area">
                <h1>D'Bolivar Gourmet</h1>
                <h5>Sabores que enamoran, eventos que inspiran</h5>
                <p>Reserva tu catering ahora</p>
                <input
                  className="button-presentation"
                  value="Reservar Ahora"
                  type="button"
                ></input>
              </div>
            </div>
            <div className="information-area">
              <CarrouselCards></CarrouselCards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainView;
