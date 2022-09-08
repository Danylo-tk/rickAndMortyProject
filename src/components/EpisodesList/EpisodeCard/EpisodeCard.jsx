import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.section`
  width: 100%;
  text-align: center;
  border-radius: .2rem;
  background-color: #232b2b;
`;

const Episode = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const EpisodeName = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 1rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  padding: 1rem 0;
  color: grey;
`;

export default function EpisodeCard(props) {
  const [episodSeason, setEpisodSeason] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + props.episode)
      .then((response) => response.json())
      .then((data) => {
        setEpisodSeason(data.episode);
        setEpisode(data.id);
        setName(data.name);
      });
  }, []);

  return (
    <Card>
      <EpisodeName>{episodSeason}</EpisodeName>
      <Episode>Episode {episode}</Episode>
      <EpisodeName>{name}</EpisodeName>
    </Card>
  );
}
