/* eslint-disable func-names */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  FaTrash,
  FaEdit,
  FaArrowAltCircleLeft,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Url } from "../../config/url";
import { Container } from "../../styles/GlobalStyles";
import { FinishedTasksView, FinishedTaskInput } from "./styled";
import { SearchBar } from "../Home/styled";
import history from "../../services/history";

export default function FinishedTasks() {
  const [rawData, setRawData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [task, setTask] = useState("");
  const [urlid, setUrlid] = useState(0);
  const input = document.querySelector(".taskInput");
  const searchInput = document.querySelector(".search");
  const methods = ["create", "read", "update", "search", "delete"];
  const specialsRegex = /^(?:[a-zA-Z0-9._])/;

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

  function InitialState(e) {
    e.preventDefault();

    setSearchValue("");
    setSearchResult([]);
    searchInput.value = "";
  }

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
    console.log(urlid);

    const formData = new FormData();

    formData.append("dboperation", methods[4]);
    formData.append("urlid", id);
    formData.append("table", "finished_tasks");

    await fetch(Url, {
      method: "POST",
      body: formData,
    }).catch((error) => console.log(error));
  }

  async function AddNewTask(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("dboperation", methods[0]);
    formData.append("task", input.value);
    formData.append("table", "task_list");

    await fetch(Url, {
      method: "POST",
      body: formData,
    }).catch((error) => console.log(error));

    Delete(e, urlid);
    Clean();
    history.push("/");
  }

  async function Search(e) {
    e.preventDefault();

    if (specialsRegex.test(searchValue)) {
      const formData = new FormData();
      formData.append("dboperation", methods[3]);
      formData.append("searchValue", searchValue);
      formData.append("table", "finished_tasks");

      await fetch(Url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(function (data) {
          if (data === "") {
            return alert("Tarefa não encontrada");
          }
          return setSearchResult(data);
        })
        .catch(function (error) {
          alert("Tarefa não encontrada");
          console.log(error);
        });
    } else {
      alert(
        "Pesquisa inválida:\nPreencha o campo de pesquisa ou use apenas letras e/ou números"
      );
    }
    Clean();
  }

  console.log(searchResult);

  return (
    <Container>
      <SearchBar>
        <button type="button" className="back" onClick={(e) => InitialState(e)}>
          <FaArrowAltCircleLeft size={32} className="backIcon" />
        </button>
        <button type="button" className="searchIcon" onClick={(e) => Search(e)}>
          <FaSearch size={24} className="icon" />
        </button>
        <input
          type="text"
          placeholder="Pesquisar tarefa..."
          className="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </SearchBar>
      <FinishedTasksView>
        {searchResult.length === 0
          ? getData.map((data) => {
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
            })
          : searchResult.map((data) => {
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
        <button
          type="button"
          className="taskSave"
          onClick={(e) => AddNewTask(e)}
        >
          Salvar
        </button>
        <Link to="/" className="toHome">
          Tarefas Pendentes
        </Link>
      </FinishedTaskInput>
    </Container>
  );
}
