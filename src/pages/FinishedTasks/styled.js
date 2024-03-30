import styled from "styled-components";
import * as colors from "../../config/colors";

export const FinishedTasksView = styled.div`
  display: flex;
  flex-direction: column;
  height: 530px;
  background-color: ${colors.primaryColor};
  word-break: normal;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid black;

  .mainDataDiv {
    display: flex;
    flex-direction: row;
    max-height: 500px;
    max-width: 730px;
    margin-top: 10px;
    justify-content: space-between;
  }

  .taskBody {
    display: flex;
    margin-left: 100px;
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
    top: 5px;
    padding: 10px;
  }

  .delIcon {
    color: red;
  }

  .delIcon:hover {
    filter: brightness(75%);
  }
`;
