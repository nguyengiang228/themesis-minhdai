import styled from "@emotion/styled";

export const FavoritesStyled = styled.div`
  margin: 3.5rem 5rem;

  .favorites-container {
    font-family: sans-serif;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 45px;
    padding: 30px;
    height: 35vh;

    .images-container {
      display: flex;
      max-width: 90vw;
      overflow: scroll;
      /* Add the following lines for smooth scrolling */
      scroll-behavior: smooth;
      transition: scroll 0.3s ease-in-out;
      overflow: hidden;
    }

    .image-slider {
      width: 350px;
      height: 250px;
      margin: 0.5rem 1.7rem;
      object-fit: cover;
      border-radius: 8px;
    }

    .nav-btn {
      color: inherit;
      border: none;
      padding: 0;
      /* font: inherit; */
      cursor: pointer;
      outline: none;
      background-color: transparent;
      /* border-radius: 6px; */
      height: 50px;
      width: 30px;
      margin: 5px;
    }
  }
`;
