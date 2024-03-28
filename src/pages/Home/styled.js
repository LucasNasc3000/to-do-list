/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";
import * as colors from "../../config/colors";

export const HomeView = styled.div``;

export const TaskView = styled.div`
  position: relative;
  max-height: 530px;
  top: -60px;
  word-break: normal;
  border-bottom: 2px solid black;

  .mainDataDiv {
    display: flex;
    position: relative;
    flex-direction: row;
    top: 0px;
    justify-content: space-between;
    border-bottom: 0.5px solid grey;
  }

  input[type="checkbox"] {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 20px;
    top: 10px;
  }

  .edit {
    display: flex;
    border-radius: 4px;
    top: 10px;
    margin-bottom: 20px;
    right: 460px;
    padding: 8px;
    position: relative;
  }

  .edit:hover {
    filter: brightness(75%);
  }

  .taskBody {
    display: flex;
    width: 450px;
    max-height: 50px;
    word-break: normal;
    font-size: 15px;
    position: relative;
    top: 15px;
    justify-content: left;
    margin-bottom: 20px;
    right: -70px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  margin-top: -30px;
  margin-left: -0px;
  width: 725px;
  height: 90px;
  background-color: #fff;

  .search {
    display: flex;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    width: 300px;
    height: 35px;
    margin-left: 110px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
  }

  .searchIcon {
    color: ${colors.buttonsColor};
    position: relative;
    width: 40px;
    height: 40px;
    left: 108px;
    top: 28px;
  }

  .icon {
    position: relative;
    top: 0px;
    right: 10px;
  }

  .icon:hover {
    filter: brightness(75%);
  }

  .back {
    display: flex;
    position: relative;
    height: fit-content;
    width: fit-content;
    left: 7px;
    top: 25px;
  }

  .backIcon {
    display: flex;
    color: ${colors.buttonsColor};
    justify-content: center;
  }

  .backIcon:hover {
    filter: brightness(75%);
  }
`;

export const TaskInput = styled.div`
  display: flex;
  margin-top: 110px;
  margin-left: 100px;
  height: 120px;
  width: 480px;
  border-radius: 5px;

  .div {
    display: flex;
    position: relative;
  }

  .taskInput {
    position: relative;
    height: 40px;
    width: 250px;
    top: 50px;
    left: 10px;
    font-size: 15px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }

  .taskSave {
    position: relative;
    height: 40px;
    width: 80px;
    left: 30px;
    top: 50px;
    background-color: #fff;
    color: black;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .taskSave:hover {
    filter: brightness(75%);
  }

  .finished {
    display: flex;
    position: relative;
    background-color: #fff;
    top: 50px;
    left: 50px;
    height: 40px;
    width: 150px;
    color: black;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .finished:hover {
    filter: brightness(75%);
  }
`;
