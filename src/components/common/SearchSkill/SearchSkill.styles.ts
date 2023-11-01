import styled from "styled-components";

export const SkillSearchContainer = styled.div`
  position: relative;
  width: 30%;
  height: 100%;

  & > div {
    display: flex;
    border: 1px solid #ccc;
    padding: 8px 4px;
    border-radius: 8px;
  }
`;

export const SelectedSkills = styled.div`
  display: flex;
  height: 100%;
  max-width: 260px;
  font-size: 12px;
  gap: 4px;
  color: var(--font-color);
  overflow-x: auto;
  scrollbar-width: thin;
`;

export const SelectedSkillTag = styled.p`
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
  gap: 6px;
  border-radius: 50px;
  padding: 8px;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }

  &:nth-child(odd) {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }

  & > .remove-skill-btn {
    cursor: pointer;
  }
`;

export const SearchSkillInput = styled.input`
  padding: 0 6px;
  font-size: 18px;
  flex: 1;
  border: none;
  outline: none;
`;

export const DropDownContent = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  left: 0;
  right: 0;
  max-height: 180px;
  overflow: auto;
  border-radius: none;

  & > ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  & > ul > li {
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  & > ul > li:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }
`;
