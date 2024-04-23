import styled from "styled-components";
import * as colors from "../../config/colors";

export const TRContainer = styled.div`
  background-color: ${colors.primaryColor};
  max-width: 785px;
  height: 700px;
  overflow: hidden;
  margin: 30px auto;
  margin-top: 0px;
  padding: 30px;
  border-radius: 4px;
`;

export const TaskRenderView = styled.div`
  position: relative;
  max-height: 450px;
  top: 110px;
  word-break: normal;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;

  .mainDataDiv {
    display: flex;
    position: relative;
    flex-direction: row;
    top: 0px;
    justify-content: space-between;
    border-bottom: 0.5px solid grey;
  }

  .edit {
    display: flex;
    border-radius: 4px;
    top: 10px;
    margin-bottom: 20px;
    right: 500px;
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
    right: -60px;
  }

  .finish {
    display: flex;
    height: 50px;
    width: 50px;
    margin-top: 5px;
    padding: 4px;
    color: black;
  }

  .checkIcon:hover {
    filter: brightness(75%);
  }
`;
