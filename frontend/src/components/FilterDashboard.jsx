import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import {
  addFilter,
  getTeachers,
  reset,
} from "../features/teachers/teacherSlice";
import TeacherItem from "../components/TeacherItem";

function FilterDashboard() {
  const dispatch = useDispatch();

  const { teachers, isLoading, isError, message } = useSelector(
    (state) => state.teachers
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getTeachers());
    dispatch(addFilter());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="content">
        {teachers.length > 0 ? (
          <div>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher._id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <h3>No teachers found!</h3>
        )}
      </section>
    </>
  );
}

export default FilterDashboard;
