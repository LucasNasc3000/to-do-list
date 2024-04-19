import styled from "styled-components";
import * as colors from "../../config/colors";

export const FinishedTasksView = styled.div`
  display: flex;
  flex-direction: column;
  height: 490px;
  margin-top: 70px;
  background-color: ${colors.primaryColor};
  word-break: normal;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .mainDataDiv {
    display: flex;
    flex-direction: row;
    max-height: 500px;
    max-width: 730px;
    margin-top: 15px;
    justify-content: space-between;
  }

  .taskBody {
    display: flex;
    margin-left: 170px;
    margin-top: 20px;
    max-height: 450px;
    width: 700px;
    border-bottom: 0.5px solid black;
    word-break: normal;
    font-size: 15px;
  }

  .delete {
    display: flex;
    position: relative;
    right: 650px;
    top: 10px;
    padding: 10px;
  }

  .edit {
    display: flex;
    position: relative;
    left: -530px;
    top: 10px;
  }

  .delIcon {
    color: red;
  }

  .delIcon:hover {
    filter: brightness(75%);
  }

  .editIcon:hover {
    filter: brightness(75%);
  }
`;

export const FinishedTaskInput = styled.div`
  margin-top: 15px;
  height: 90px;

  .toHome {
    display: flex;
    position: relative;
    margin-left: 550px;
    top: -50px;
    height: 40px;
    width: fit-content;
    align-items: center;
    border-radius: 4px;
    padding: 6px;
    background-color: ${colors.primaryColor};
    color: black;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .taskSave {
    display: flex;
    position: relative;
    height: 40px;
    width: 90px;
    margin-left: 435px;
    top: -10px;
    align-items: center;
    justify-content: center;
    padding: 6px;
    background-color: ${colors.primaryColor};
    color: black;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .taskInput {
    display: flex;
    position: relative;
    height: 40px;
    width: 250px;
    top: 30px;
    left: 110px;
    font-size: 15px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }

  .taskSave:hover {
    filter: brightness(75%);
  }

  .toHome:hover {
    filter: brightness(75%);
  }
`;
