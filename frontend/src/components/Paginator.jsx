import { Pagination } from "@mantine/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Paginator(props) {
  const [activePage, setPage] = useState(props.pageNumber);
  const [pagecount, setPagecount] = useState(5);

  const { numberOfTeachers } = useSelector((state) => state.teachers);

  const noOfPages = Math.ceil(numberOfTeachers / 50);

  useEffect(() => {
    setPagecount(noOfPages);
  }, [activePage, noOfPages]);

  return (
    <div className="pagination-bar">
      <Pagination
        page={activePage}
        onChange={(e) => {
          setPage(e);
          props.onChange(e);
        }}
        total={pagecount}
        position="center"
        boundaries={1}
        siblings={1}
      />
    </div>
  );
}

export default Paginator;
