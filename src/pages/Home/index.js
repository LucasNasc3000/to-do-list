/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState } from "react";
import { FaSearch, FaArrowAltCircleLeft } from "react-icons/fa";
import { Url } from "../../config/url";
import { Container } from "../../styles/GlobalStyles";
import TaskRender from "../TaskRender/index";
import { TaskView, HomeView, SearchBar } from "./styled";
// import history from "../../services/history";

export default function Home() {
  const [rawData, setRawData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const methods = ["create", "read", "update", "search"];
  const input = document.querySelector(".taskInput");
  const searchInput = document.querySelector(".search");
  const specialsRegex = /^(?:[a-zA-Z0-9._])/;

  function Clean() {
    setSearchValue("");
    input.value = "";
  }

  function InitialState(e) {
    e.preventDefault();

    setSearchValue("");
    setSearchResult("");
    searchInput.value = "";
  }

  async function Search(e) {
    e.preventDefault();

    if (specialsRegex.test(searchValue)) {
      const formData = new FormData();
      formData.append("dboperation", methods[3]);
      formData.append("searchValue", searchValue);

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

  useEffect(() => {
    async function getAllData() {
      const formData = new FormData();
      formData.append("dboperation", methods[1]);
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

  useEffect(() => {
    if (searchValue !== "") {
      searchInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
          Search(e);
        }
      });
    } else {
      InitialState();
    }
  });

  useEffect(() => {
    searchInput.addEventListener("change", (e) => {
      if (e.keyCode === 13) {
        InitialState(e);
      }
    });
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
      </HomeView>
    </Container>
  );
}
