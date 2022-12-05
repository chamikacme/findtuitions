import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import FilterDashboard from "../components/FilterDashboard";
import Paginator from "../components/Paginator";
import { useDispatch } from "react-redux";
import { getTeachers } from "../features/teachers/teacherSlice";

function Homepage() {
  const dispatch = useDispatch();

  const { teacher } = useSelector((state) => state.auth);

  const [pageNumber, setPageNumber] = useState(1);
  const [pagecount, setPagecount] = useState(10);

  const [filterSubject, setFilterSubject] = useState("");
  const [filterPhysical, setFilterPhysical] = useState("");

  const onSubmit = async () => {
    setPageNumber(1);
    const filterData = {
      subject: filterSubject,
      physical: filterPhysical,
      page: 1,
      perPage: 50,
    };
    console.log(filterData);
    console.log({ pageNumber: pageNumber });
    setPageNumber(1);
    console.log({ pageNumber: pageNumber });
    dispatch(getTeachers(filterData));
  };

  const onPageChange = () => {
    const filterData = {
      subject: filterSubject,
      physical: filterPhysical,
      page: pageNumber,
      perPage: 50,
    };
    console.log(filterData);
    dispatch(getTeachers(filterData));
  };

  useEffect(() => {
    onPageChange();
  }, [pageNumber]);

  return (
    <>
      <section>
        <h1>{teacher ? "Welcome Back " + teacher.name : "Welcome"}</h1>
        <p>Sri Lanka's first ever online tutuion portal!</p>
      </section>
      <Filter
        filterSubject={filterSubject}
        setSubject={(subject) => setFilterSubject(subject)}
        filterPhysical={filterPhysical}
        setPhysical={(dristrict) => setFilterPhysical(dristrict)}
        onSubmit={onSubmit}
        resetPageNumber={(number) => setPageNumber(number)}
      />
      <FilterDashboard />
      <Paginator
        onChange={(page) => setPageNumber(page)}
        pageNumber={pageNumber}
        pagecount={pagecount}
      />
    </>
  );
}

export default Homepage;
