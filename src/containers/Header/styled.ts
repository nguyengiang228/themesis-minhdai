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
    margin-left: 1rem;
  }
  .header-menu-option {
    width: 58%;

    align-items: center;
    justify-content: space-between;
  }
  .header-menu-category {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 30px;
  }
  .header-menu-category:hover {
    cursor: pointer;
  }
  .header-login {
    width: 12%;
    margin-right: 5rem;
    display: flex;
    align-items: center;
  }
  .login-text {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b7cee0;
    color: #314c63;
    border-radius: 5px;
    border-right: 1px solid #fff;
    width: 5.5vw;
    padding: 5px;
  }
  .register-text {
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background-color: #b7cee0;
    color: #314c63;
    width: 5.5vw;
    padding: 5px;
    margin-right: 0.5rem;
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
    margin-right: 9rem;
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
