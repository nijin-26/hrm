import styled from "styled-components";

export const SkillSearchContainer = styled.div`
  position: relative;
  height: 100%;
  background-color: #fff;
  flex-grow: 1;
  border: 1px solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    padding: 2px 4px;
  }
`;

export const SelectedSkills = styled.div`
  padding: 6px 0;
  display: flex;
  height: 100%;
  max-width: 230px;
  font-size: 12px;
  gap: 4px;
  color: var(--font-color);
  overflow-x: auto;
  scrollbar-width: thin;

  &.outside {
    margin: 8px 0;
    max-width: unset;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
`;

export const SelectedSkillTag = styled.p`
  height: 100%;
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
  white-space: nowrap;
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
  height: 100%;
  min-width: 120px;
  padding: 10px 6px;
  font-size: 16px;
  flex: 1;
  border: none;
  outline: none;
`;

export const DropDownContent = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 8px;
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  max-height: 180px;
  overflow: auto;
  border-radius: none;

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
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
