import React from "react";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="calendarContainer">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
