import React from "react";
import "./Header-css.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome to RoomSeek!</h1>
      <p>This apartment building has four apartments.</p>
      <p>Each apartment has five bedrooms that can be leased separately.</p>
      <p>
        Set the rent, move-in date and pet-friendly filters to find a bedroom
        that suits your needs!
      </p>
    </div>
  );
};

export default Header;
