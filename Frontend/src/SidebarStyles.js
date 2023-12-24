import { Link } from "react-router-dom";
import styled from "styled-components";

export const SSidebar = styled.div`
  margin: 0;
  padding: 0;
  height: 110vh;
  width: ${({ isOpen }) => (!isOpen ? `auto` : "200px")};
  background-color: #2a4b5a;
  color: #80d7cf;
  position: relative;
`;

export const SideButton = styled.button`
  height: 40px;
  width: auto;
  background: none;
  border: none;
  color: white;
  border-radius: 50%;
  font-size: 20px;

  :hover {
    cursor: pointer;
    color: black;
  }
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  margin: 10 0;
`;

export const SConstiner = styled.div`
  height: auto;
  width: 100%;
`;

export const SIcon = styled.div`
  display: flex;
  margin-left: 5px;

  svg {
    font-size: 20px;
  }
`;

export const SLabel = styled.span`
  text-decoration: none;
  flex: 1;
  margin-left: 10px;
`;

export const SLink = styled(Link)`
  width: 150px;
  height: 50px;
  margin: 0;
  display: flex;
  align-items: center;
`;
