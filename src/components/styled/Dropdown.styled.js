import styled from "styled-components";

const DropdownStyled = styled.ul`
  flex: 1;
  display: flex;
  list-style: none;

  li {
    padding: 0 1.4rem;

    & a {
      text-decoration: none;
      color: var(--medium-gray);
      &:hover {
        color: var(--almost-black);
      }
    }
  }
  .nav__sublinks {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: baseline;
    &:hover .sublist {
      display: block;
    }
  }
  .nav__sublinks-title {
    display: inline;
    margin-right: 0.3rem;
    cursor: pointer;
    color: var(--medium-gray);
    &:hover {
      color: var(--almost-black);
    }
  }
  .sublist {
    z-index: -1;
    display: none;
    position: absolute;
    left: -7rem;
    top: 4rem;
    background-color: #fff;
    list-style: none;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    &::before {
      display: block;
      content: "";
      position: absolute;
      background-color: var(--almost-white);
      width: 10rem;
      height: 5rem;
      right: 0;
      top: -5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
      border-radius: 10px;
    }
    li {
      padding: 1rem;
      display: flex;
      width: 18rem;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    &:hover {
      display: block;
    }
  }
`;

export default DropdownStyled;
