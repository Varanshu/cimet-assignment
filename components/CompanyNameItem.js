import React from "react";
import styled from "styled-components";
import { useCapitalWord } from "../hooks";

const CompanyNameItem = ({ name, length, active = false }) => {
  // console.log("active", active);
  return (
    <Item active={active}>
      {/* Name of the company */}
      {useCapitalWord(name)}

      {/* Length of the plans under the company */}
      <Length>{length}</Length>
    </Item>
  );
};

const Item = styled.span`
  border-radius: 5px;
  padding: 5px 10px;
  line-height: 1;
  background-color: ${(props) => (props.active ? "#1F497D" : "unset")};
  color: ${(props) => (props.active ? "white" : "unset")};
  cursor: pointer;
  filter: brightness(1);
  transition: all 0.5s;

  &:hover {
    filter: brightness(0.75);
  }
`;

const Length = styled.span`
  border-radius: 20px;
  margin: 5px;
  padding-inline: 3px;
  background-color: white;
  color: black;
`;

export default CompanyNameItem;
