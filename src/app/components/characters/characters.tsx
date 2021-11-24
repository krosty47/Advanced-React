import { useState, useEffect } from "react";
import styled from "styled-components";
import { ApiConstants } from "../../../constants/api";

const Container = styled.div``;

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(ApiConstants.characters)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Container>
      {characters.map((character, index) => (
        <h2 key={index}>{character.name}</h2>
      ))}
    </Container>
  );
};
