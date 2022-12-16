import React from "react";

import Header from "../components/Header"
import Filter from "../components/Filter";
import Card from "../components/Card";
import Modal from "../components/Modal"

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="float-right">
        <Filter />
      </div>
      <Card />
      <Modal />
    </div>
  );
}