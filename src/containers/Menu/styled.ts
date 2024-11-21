import styled from "@emotion/styled";

export const MenuStyle = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  color: #000;
  border-bottom: 1px solid #ccc;
  .menu-selected-option {
    display: flex;
    width: 55%;
    padding: 0rem 2rem;
    justify-content: space-around;
    align-items: center;
  }
  .box-search {
    display: flex;
    align-items: center;
    float: right;
    padding: 0;
    margin-top: 8px;
    margin-right: 16px;
    background: #324c63;
    font-size: 17px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  .box-search button {
    background-color: #324c63;
    display: flex;
    align-items: center;
  }
  .box-search input {
    width: 80%;
    height: 45px;
    margin: 0;
    outline: 0;
    color: #fff;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #324c63;
  }
  .box-search input::placeholder {
    color: #fff;
    font-weight: bold;
  }
`;
