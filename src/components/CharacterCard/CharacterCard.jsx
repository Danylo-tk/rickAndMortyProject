import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.main`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  color: white;
  text-align: left;
  background-color: #232b2b;
`;

const CardData = styled.div`
  margin: 1rem;
`;

const CharacterDataSet = styled.section`
  margin: 1rem 0;
`;

const CharacterName = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
`;

const CharacterData = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  margin: 0.1rem 0;
  font-size: 1.3rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
`;

const CharacterDataCategory = styled(CharacterData)`
  color: grey;
`;

export default function CharacterCard() {
  const [url, setUrl] = useState(null);
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);

  function getRandomCharacter(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/" + getRandomCharacter(1, 827)
    )
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.image);
        setName(data.name);
        setStatus(data.status);
        setGender(data.gender);
        setLocation(data.location.name);
        console.log(data);
      });
  }, []);

  return (
    <Card>
      <img src={url} alt="" />
      <CardData>
        <CharacterName>{name}</CharacterName>

        <CharacterDataSet>
          <CharacterDataCategory>Status:</CharacterDataCategory>
          <CharacterData>{status}</CharacterData>
        </CharacterDataSet>

        <CharacterDataSet>
          <CharacterDataCategory>Gender:</CharacterDataCategory>
          <CharacterData>{gender}</CharacterData>
        </CharacterDataSet>

        <CharacterDataSet>
          <CharacterDataCategory>Last known location:</CharacterDataCategory>
          <CharacterData>{location}</CharacterData>
        </CharacterDataSet>
      </CardData>
    </Card>
  );
}
