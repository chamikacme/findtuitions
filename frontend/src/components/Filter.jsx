import { useState } from "react";
import { Select } from "@mantine/core";
import subjectData from "../data/subjectData.json";
import districtData from "../data/districtData.json";

function Filter(props) {
  const [filterSubject, setFilterSubject] = useState(props.filterSubject);
  const [filterPhysical, setFilterPhysical] = useState(props.filterPhysical);

  const onSubmit = (e) => {
    props.resetPageNumber(1);
    e.preventDefault();
    props.onSubmit();
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
            onChange={(e) => {
              setFilterSubject(e);
              props.setSubject(e);
            }}
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
            onChange={(e) => {
              setFilterPhysical(e);
              props.setPhysical(e);
            }}
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
