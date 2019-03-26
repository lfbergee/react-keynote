import styled from "styled-components";

const getDot = dot => {
  switch (dot) {
    case "fire":
      return "'🔥'";
    case "heart":
      return "'❤️'";
    case "skull":
      return "'☠️'";
    case "puke":
      return "'🤮'";
    case "angry":
      return "'🤬'";
    case "down":
      return "'👎'";
    case "seeNoEvil":
      return "'🙈'";
    default:
      return "'⚡'";
  }
};

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: 24px;
  font-size: 22px;
  list-style: ${props => (props.customDot ? "none" : "initial")};
  &:before {
    content: ${props => (props.customDot ? getDot(props.customDot) : "")};
    margin-right: 18px;
  }
`;
