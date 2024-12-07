import styled from "@emotion/styled";

export const FooterStyled = styled.div`
  margin-top: 2rem;
  padding: 1rem 6rem;
  height: 40vh;
  color: #fff;
  background-color: #324c63;
  .footer-brand {
    display: flex;
    align-items: center;
    .footer-logo {
      width: 9rem;
      margin-right: 1rem;
    }
  }
  .footer-info {
    margin: 1rem 7em;
    display: flex;
    justify-content: space-between;
    .business-information > div {
      margin-top: 2rem;
    }
    .social-network > div {
      width: 17rem;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
    }
    .footer-certification > img {
      width: 180px;
      margin-top: 2rem;
      margin-left: -10px;
      padding-right: 2rem;
      height: 60px;
    }
  }
`;
