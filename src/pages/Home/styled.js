/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";
import * as colors from "../../config/colors";

export const HomeView = styled.div``;

export const TaskView = styled.div`
  position: relative;
  max-height: 350px;
  top: -20px;
  word-break: normal;
  overflow: auto;
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

export const LinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 140px;
  justify-content: center;
  align-items: center;

  .finished {
    display: flex;
    background-color: #417cea;
    margin: 30px;
    height: 70px;
    width: 180px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    border-radius: 4px;
  }

  .finished:hover {
    filter: brightness(75%);
  }
`;

export const SearchBar = styled.div`
  position: relative;
  bottom: 100px;
  right: -270px;

  .search {
    display: flex;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    width: 350px;
    margin-left: -100px;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
  }

  .searchIcon {
    color: ${colors.buttonsColor};
    position: relative;
    width: 40px;
    height: 40px;
    right: 150px;
    top: -50px;
  }

  .icon {
    position: relative;
    top: 0px;
    right: 10px;
  }

  .back {
    display: flex;
    position: relative;
    height: fit-content;
    width: fit-content;
    right: 300px;
    top: 0px;
  }

  .backIcon {
    display: flex;
    color: ${colors.buttonsColor};
    justify-content: center;
  }
`;

export const TaskInput = styled.div`
  display: flex;
  margin-top: 195px;
  margin-left: 140px;
  height: 120px;
  width: 380px;
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
    font-size: 20px;
  }

  .taskSave {
    position: relative;
    height: 40px;
    width: 100px;
    left: 30px;
    top: 50px;
    background-color: #fff;
    color: black;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
