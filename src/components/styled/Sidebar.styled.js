import styled from "styled-components";

const SidebarStyled = styled.nav`
  z-index: 1;
  order: 1;
  position: absolute;
  right: 0;
  background-color: red;
  width: 50%;
  min-height: 100%;
  height: auto;
  background-color: var(--almost-white);
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-left: 1px solid var(--medium-gray);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  &.show {
    transform: translateX(0);
  }

  & .btns-container {
    display: flex;
    justify-content: center;
  }
  & .btn {
    align-self: flex-end;
  }
  &.sidebar {
    & .dropdown {
      flex-direction: column;
      width: 100%;
      li {
        margin: 2rem 0;
      }
      .nav__sublinks {
        margin: 2rem 0;
        flex-direction: column;
        padding: 0;

        & .nav__sublinks-title {
          padding: 2rem;
        }
      }
      & .sublist {
        position: relative;
        width: 100%;
        left: 0;
        top: 0;
        &::before {
          display: none;
        }
        & li {
          justify-content: flex-start;

          & .sublink-icon {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`;

export default SidebarStyled;
