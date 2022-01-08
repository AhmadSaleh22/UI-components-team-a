import styled from "styled-components";

const HeaderBox = styled.div`
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  width: 95%;
  position: fixed;
  box-shadow: inset 0px -1px 1px ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default HeaderBox;
