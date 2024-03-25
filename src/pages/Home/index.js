/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaArrowAltCircleLeft } from "react-icons/fa";
import { Container } from "../../styles/GlobalStyles";
import TaskRender from "../TaskRender/index";
import {
  TaskView,
  TaskInput,
  HomeView,
  LinkButtons,
  SearchBar,
} from "./styled";
// import history from "../../services/history";

export default function Home() {
  const [rawData, setRawData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [task, setTask] = useState("");
  const [urlid, setUrlid] = useState(0);
  const input = document.querySelector(".taskInput");
  const searchInput = document.querySelector(".search");
  const specialsRegex = /^(?:[a-zA-Z0-9._])/;

  function Clean() {
    setSearchValue("");
    setUrlid(0);
    setTask("");
    input.value = "";
  }

  function InitialState(e) {
    e.preventDefault();

    setSearchValue("");
    setSearchResult("");
    searchInput.value = "";
  }

  async function AddNewTask(e) {
    e.preventDefault();
    const formData = new FormData();

    if (task === "") {
      formData.append("task", input.value);

      await fetch("http://localhost/lista-de-tarefas-api/new-task.php", {
        method: "POST",
        body: formData,
      }).catch((error) => console.log(error));
      Clean();
    } else {
      formData.append("urlid", urlid);
      formData.append("task", input.value);

      await fetch("http://localhost/lista-de-tarefas-api/task-update.php", {
        method: "POST",
        body: formData,
      }).catch((error) => console.log(error));
      Clean();
    }
  }

  async function Search(e) {
    e.preventDefault();

    if (specialsRegex.test(searchValue)) {
      const formData = new FormData();
      formData.append("searchValue", searchValue);

      await fetch("http://localhost/lista-de-tarefas-api/task-search.php", {
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

  useEffect(() => {
    async function getAllData() {
      await fetch("http://localhost/lista-de-tarefas-api/task-list.php", {
        method: "GET",
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

  useEffect(() => {
    if (searchValue !== "") {
      searchInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
          Search(e);
        }
      });
    }
  });

  return (
    <Container>
      <HomeView>
        <SearchBar>
          <button
            type="button"
            className="back"
            onClick={(e) => InitialState(e)}
          >
            <FaArrowAltCircleLeft size={32} className="backIcon" />
          </button>
          <button
            type="button"
            className="searchIcon"
            onClick={(e) => Search(e)}
          >
            <FaSearch size={24} className="icon" />
          </button>
          <input
            type="text"
            placeholder="Pesquisar tarefa..."
            className="search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </SearchBar>
        <TaskView>
          {searchResult === "" ? (
            <TaskRender tasks={getData} />
          ) : (
            <TaskRender taskSearch={searchResult} />
          )}
        </TaskView>
        <TaskInput>
          <input type="text" className="taskInput" />
          <button
            type="button"
            className="taskSave"
            onClick={(e) => AddNewTask(e)}
          >
            Salvar
          </button>
        </TaskInput>
      </HomeView>
    </Container>
  );
}
