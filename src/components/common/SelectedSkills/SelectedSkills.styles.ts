import styled from "styled-components";

export const SelectedSkillsContainer = styled.div`
  padding: 6px 0;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  min-width: 360px;
  max-width: 50%;
  font-size: 12px;
  gap: 8px;

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
