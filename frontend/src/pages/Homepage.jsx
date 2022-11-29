import React from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import FilterDashboard from "../components/FilterDashboard";

function Homepage() {
  const { teacher } = useSelector((state) => state.auth);

  return (
    <>
      <section>
        <h1>{teacher ? "Welcome Back " + teacher.name : "Welcome"}</h1>
        <p>Sri Lanka's first ever online tutuion portal!</p>
      </section>
      <Filter />
      <FilterDashboard />
    </>
  );
}

export default Homepage;
