import { useQuery } from "@tanstack/react-query";
import EpisodeCard from "./EpisodeCard/EpisodeCard";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

function fetchEpisodes() {
  return fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => {
      return response.json();
    })
    .then((response) => response.results);
}

export default function EpisodesList(props) {
  const { data: episodes } = useQuery(["episodes"], fetchEpisodes);

  if (!episodes) return null;

  const renderedEpisodes = episodes.map(({ id, name, episode }) => {
    return (
      <EpisodeCard
        key={id}
        title={name}
        season={Number(episode.substring(1, 3))}
        episode={Number(episode.substring(4, 6))}
      />
    );
  });

  return <Grid>{renderedEpisodes}</Grid>;
}
