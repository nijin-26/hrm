import styled from "styled-components";

export const ImageHolder = styled.div`
  justify-content: center;
  position: relative;
  margin: 20px 0;

  & > input {
    display: none;
  }

  .image-round-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--bg-color);
    border: 2px solid var(--primary-color);
    overflow: hidden;
  }

  .image-round-container img {
    max-width: 100%;
    object-fit: cover;
  }

  .add-image-btn {
    position: absolute;
    bottom: -20px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    color: #fff;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.4s;
    border: 2px solid ${(props) => props.theme.secondary};
  }
  .add-image-btn:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;
