import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 3rem;
  .btns-container {
    display: flex;
  }
  .nav__logo {
    margin-right: 5.5rem;
    fill: var(--almost-black);
    align-self: center;
    @media screen and (max-width: 800px) {
      margin-right: 1.5rem;
    }
  }

  @media screen and (max-width: 700px) {
    .btns-container,
    .dropdown {
      display: none;
    }
  }
  @media screen and (min-width: 700px) {
    .btns-container,
    .dropdown {
      display: flex;
    }
    .sidebar-btn {
      display: none;
    }
  }
`;

export default NavbarWrapper;
