import styled from "styled-components";

const ContentStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .content {
    /* margin-top: 10rem; */
    /* padding: 3rem 6rem; */
    flex-basis: 50%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-size: 6rem;
      color: var(--almost-black);
      margin-bottom: 3rem;
      margin-top: 3.5vw;
    }
    p {
      color: var(--medium-gray);
      width: 90%;
      margin-bottom: 4rem;
    }
    .social-icons {
      margin-top: auto;
      justify-self: flex-end;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .content__img {
    height: 80vh;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    .content {
      order: 1;
      text-align: center;
      h1 {
        font-size: 4rem;
      }
      p {
        width: 100%;
      }
      button {
        margin: 0 auto;
        margin-bottom: 5rem;
      }
    }
    .content__img {
      width: 100%;
      height: 50vh;
    }
    .social-icons {
      margin: 0 auto;
      margin-bottom: 4rem;
      flex-wrap: wrap;
      width: 70%;
      & .social-icon {
        margin: 2rem;
      }
    }
  }
`;

export default ContentStyled;
