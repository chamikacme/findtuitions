import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getTeachers, reset } from "../features/teachers/teacherSlice";
import TeacherItem from "../components/TeacherItem";

function FilterDashboard() {
  const dispatch = useDispatch();

  const { teachers, isLoading, isError, message, numberOfTeachers } =
    useSelector((state) => state.teachers);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    const filterData = {
      page: 1,
      perPage: 50,
    };

    console.log(filterData);
    dispatch(getTeachers(filterData));

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
        <div>
          <h4>{numberOfTeachers} teachers found!</h4>
        </div>
        <div>
          {teachers.length > 0 ? (
            <div>
              {teachers.map((teacher) => (
                <TeacherItem key={teacher._id} teacher={teacher} />
              ))}
            </div>
          ) : (
            <h3>No teachers found!</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default FilterDashboard;
