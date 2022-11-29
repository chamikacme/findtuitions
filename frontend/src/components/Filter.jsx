import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../features/teachers/teacherSlice";
import { Select } from "@mantine/core";
import subjectData from "../data/subjectData.json";

function Filter() {
  const [filterSubject, setFilterSubject] = useState("");
  const [filterPhysical, setFilterPhysical] = useState("");

  const dispatch = useDispatch();

  const districtData = [
    "Any District",
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    const filterData = { subject: filterSubject, physical: filterPhysical };
    dispatch(addFilter(filterData));
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <Select
            className="form-control"
            type="text"
            id="filterSubject"
            name="filterSubject"
            data={subjectData}
            value={filterSubject}
            searchable
            clearable
            placeholder="Any Subject"
            onChange={setFilterSubject}
          />
        </div>

        <div className="form-group">
          <Select
            className="form-control"
            type="text"
            id="filterPhysical"
            name="filterPhysical"
            data={districtData}
            value={filterPhysical}
            searchable
            clearable
            placeholder="Any District"
            onChange={setFilterPhysical}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Filter
          </button>
        </div>
      </form>
    </section>
  );
}

export default Filter;
