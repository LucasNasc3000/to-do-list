import styled from "styled-components";

export const TRContainer = styled.div`
  background-color: #fff;
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
  // border-bottom: 2px solid black;
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
