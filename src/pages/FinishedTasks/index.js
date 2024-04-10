/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Url } from "../../config/url";
import { Container } from "../../styles/GlobalStyles";
import { FinishedTasksView, FinishedTaskInput } from "./styled";

export default function FinishedTasks() {
  const [rawData, setRawData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [task, setTask] = useState("");
  const [urlid, setUrlid] = useState(0);
  const input = document.querySelector(".taskInput");
  const methods = ["create", "read", "update", "search", "delete"];

  useEffect(() => {
    async function getAllData() {
      const formData = new FormData();
      formData.append("dboperation", methods[1]);
      formData.append("table", "finished_tasks");
      await fetch(Url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(function (data) {
          rawData.push(data);
          return rawData;
        })
        .catch((error) => console.log(error));

      rawData.map((d) => {
        setGetData(d);
        return getData;
      });
    }
    getAllData();
  });

  function Clean() {
    setUrlid(0);
    setTask("");
    input.value = "";
  }

  function GetTask(e, taskParam, id) {
    e.preventDefault();

    if (task !== "" && urlid !== "") Clean();

    setTask(taskParam);
    setUrlid(id);
    input.value = task;
  }

  async function Delete(e, id) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("dboperation", methods[4]);
    formData.append("urlid", id);
    formData.append("table", "finished_tasks");

    await fetch(Url, {
      method: "POST",
      body: formData,
    }).catch((error) => console.log(error));
  }

  return (
    <Container>
      <FinishedTasksView>
        {getData.map((data) => {
          return (
            <div className="mainDataDiv">
              <div className="taskBody">{data.task}</div>
              <button
                type="button"
                className="edit"
                onClick={(e) => GetTask(e, data.task, data.idtask)}
              >
                <FaEdit size={28} color="blue" className="editIcon" />
              </button>
              <div className="delete">
                <FaTrash
                  size={28}
                  className="delIcon"
                  onClick={(e) => Delete(e, data.idtask)}
                />
              </div>
            </div>
          );
        })}
      </FinishedTasksView>
      <FinishedTaskInput>
        <input type="text" className="taskInput" placeholder="Nova tarefa..." />
        <button type="button" className="taskSave">
          Salvar
        </button>
        <Link to="/" className="toHome">
          Tarefas Pendentes
        </Link>
      </FinishedTaskInput>
    </Container>
  );
}
