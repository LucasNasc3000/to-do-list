/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { Url } from "../../config/url";
import { TaskRenderView, TRContainer } from "./styled";
import { TaskInput } from "../Home/styled";

export default function TaskRender({ tasks, taskSearch }) {
  const [task, setTask] = useState("");
  const [urlid, setUrlid] = useState(0);
  const input = document.querySelector(".taskInput");
  const taskBody = document.querySelector(".taskBody");
  const finish = document.querySelector(".finish");
  const methods = ["create", "read", "update", "search", "finish"];
  // const count = 0;

  function Clean() {
    setUrlid(0);
    setTask("");
    input.value = "";
  }

  async function Finish(e, id) {
    e.preventDefault();
    console.log(id);

    setUrlid(id);
    const formData = new FormData();

    formData.append("dboperation", methods[4]);
    formData.append("urlid", input.value);

    await fetch(Url, {
      method: "POST",
      body: formData,
    }).catch((error) => console.log(error));

    taskBody.classList.remove("taskBody");
    Clean();
  }

  function GetTask(e, taskParam, id) {
    e.preventDefault();

    if (task !== "" && urlid !== "") Clean();

    setTask(taskParam);
    setUrlid(id);
    input.value = task;
  }

  async function AddNewTask(e) {
    e.preventDefault();
    const formData = new FormData();

    if (task === "") {
      formData.append("dboperation", methods[0]);
      formData.append("task", input.value);

      await fetch(Url, {
        method: "POST",
        body: formData,
      }).catch((error) => console.log(error));
      Clean();
    } else {
      formData.append("dboperation", methods[2]);
      formData.append("urlid", urlid);
      formData.append("task", input.value);

      await fetch(Url, {
        method: "POST",
        body: formData,
      }).catch((error) => console.log(error));
      Clean();
    }
  }

  return (
    <TRContainer>
      <TaskRenderView>
        {tasks !== ""
          ? tasks.map((alldata) => {
              return (
                <div className="mainDataDiv">
                  <button
                    type="button"
                    className="finish"
                    onClick={(e) => Finish(e)}
                  >
                    <FaCheckCircle size={30} />
                  </button>
                  <div className="taskBody">{alldata.task}</div>
                  <button type="button" className="edit">
                    <FaEdit
                      size={28}
                      color="blue"
                      onClick={(e) => GetTask(e, alldata.task, alldata.idtask)}
                    />
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
      </TaskRenderView>
      <TaskInput>
        <input type="text" className="taskInput" placeholder="Nova tarefa..." />
        <button
          type="button"
          className="taskSave"
          onClick={(e) => AddNewTask(e)}
        >
          Salvar
        </button>
        <Link to="finished-tasks" className="finished">
          Tarefas Concluídas
        </Link>
      </TaskInput>
    </TRContainer>
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
