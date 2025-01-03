import React from "react";
import IndexAccount from "src/components/Account/IndexAccount";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";

const Account = () => {
  return (
    <div className="main-layout">
      <IndexAccount />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Account;
