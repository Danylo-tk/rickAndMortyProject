import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.section`
  display: flex;
  margin: 1rem;
  width: 40rem;
  color: white;
  text-align: center;
  background-color: black;
`;

const CardData = styled.div`
  margin: 1rem;
`;

const CharacterName = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 2rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

const CharacterData = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 1rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

export default function CharacterCard() {
  const [url, setUrl] = useState(null);
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [gender, setGender] = useState(null);

  function getRandomCharacter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + getRandomCharacter(1, 827))
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.image);
        setName(data.name);
        setStatus(data.status);
        setGender(data.gender);
      });
  }, []);

  return (
    <Card>
      <img src={url} alt="" />
      <CardData>
        <CharacterName>{name}</CharacterName>
        <CharacterData>Status: {status}</CharacterData>
        <CharacterData>Gender: {gender}</CharacterData>
      </CardData>
    </Card>
  );
}
