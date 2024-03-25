/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { Container } from "../../styles/GlobalStyles";
import { HomeView, TaskInput, TaskView } from "../Home/styled";

export default function TaskRender({ tasks, taskSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");

  function Clean() {
    setSearchValue("");
  }

  // function GetTask(e, taskParam, id) {
  //   e.preventDefault();

  //   if (task !== "" && urlid !== "") Clean();

  //   setTask(taskParam);
  //   setUrlid(id);
  //   input.value = task;
  // }

  return (
    <Container>
      <TaskView>
        {tasks !== ""
          ? tasks.map((alldata) => {
              return (
                <div className="mainDataDiv">
                  <input type="checkbox" className="finish" />
                  <div className="taskBody">{alldata.task}</div>
                  <button
                    type="button"
                    className="edit"
                    onClick={(e) => GetTask(e, alldata.task, alldata.idtask)}
                  >
                    <FaEdit size={28} color="blue" />
                  </button>
                </div>
              );
            })
          : taskSearch.map((alldata) => {
              return (
                <div className="mainDataDiv">
                  <input type="checkbox" className="finish" />
                  <div className="taskBody">{alldata.task}</div>
                  <button
                    type="button"
                    className="edit"
                    onClick={(e) => GetTask(e, alldata.task, alldata.idtask)}
                  >
                    <FaEdit size={28} color="blue" />
                  </button>
                </div>
              );
            })}
      </TaskView>
    </Container>
  );
}

TaskRender.defaultProps = {
  taskSearch: "",
  tasks: "",
};

TaskRender.propTypes = {
  tasks: PropTypes.object,
  taskSearch: PropTypes.object,
};
