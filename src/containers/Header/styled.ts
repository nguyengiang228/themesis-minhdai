import styled from "@emotion/styled";

export const HeadrStyled = styled.div`
  width: 100%;
  background-color: #324c63;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  padding: 0;
  border-bottom: 1px solid #ccc;
  color: #b9d2e8;
  .header {
    display: flex;
    align-items: center;
  }
  .header-menu-option {
    width: 60%;
    align-items: center;
    justify-content: space-between;
  }
  .header-menu-category {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 30px;
  }
  .header-menu-category:hover {
    cursor: pointer;
  }

  .login-text {
    border-right: 1px solid #fff;
    width: 5vw;
    padding: 1px;
  }
  .register-text {
    width: 4vw;
    padding: 1px;
    margin-left: 1rem;
  }

  .login-text:hover,
  .register-text:hover {
    cursor: pointer;
    font-weight: bold;
  }
  .header-notication {
    display: flex;
    width: 170px;
    align-items: center;
    justify-content: space-between;
    .header-avatar {
      width: 40px;
    }
    .notice-status {
      color: #fff;
      background-color: red;
      border-radius: 20px;
      display: flex;
      width: 20px;
      height: 20px;
      align-items: center;
      justify-content: center;
      margin: -15px 20px;
      transform: translate(0rem, -2rem);
    }
  }
`;
