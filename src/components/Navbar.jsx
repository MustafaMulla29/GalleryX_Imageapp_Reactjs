import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{
          top: "0",
          left: "0",
          position: "sticky",
          zIndex: "1111",
          height: "80px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            GalleryX
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
