/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Url } from "../../config/url";
import { Container } from "../../styles/GlobalStyles";
import { FinishedTasksView } from "./styled";

export default function FinishedTasks() {
  const [rawData, setRawData] = useState([]);
  const [getData, setGetData] = useState([]);
  const methods = ["create", "read", "update", "search"];

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
          return console.log(rawData);
        })
        .catch((error) => console.log(error));

      rawData.map((d) => {
        setGetData(d);
        return getData;
      });
    }
    getAllData();
  });

  return (
    <Container>
      <FinishedTasksView>
        {getData.map((data) => {
          return (
            <div className="mainDataDiv">
              {data.isfinished === "finished" ? (
                <>
                  <div className="taskBody">{data.task}</div>
                  <div className="delete">
                    <FaTrash size={28} className="delIcon" />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </FinishedTasksView>
    </Container>
  );
}
