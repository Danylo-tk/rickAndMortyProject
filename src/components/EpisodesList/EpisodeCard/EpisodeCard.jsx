import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.section`
  width: 100%;
  text-align: center;
  border-radius: 0.2rem;
  background-color: #232b2b;
`;

const Episode = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const Subheading = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 1rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  padding: 1rem 0;
  color: grey;
`;

const Season = styled(Subheading)``;

const Title = styled(Subheading)``;

export default function EpisodeCard({ season, episode, title }) {
  return (
    <Card>
      <Season>Season {season}</Season>
      <Episode>Episode {episode}</Episode>
      <Title>{title}</Title>
    </Card>
  );
}
