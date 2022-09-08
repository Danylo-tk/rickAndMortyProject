import EpisodeCard from "./EpisodeCard/EpisodeCard";
import styled from "styled-components";


const Grid = styled.section`
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default function EpisodesList(props) {
  const rows = [];
  for (let i = 1; i < 52; i++) {
    rows.push(<EpisodeCard episode={i} />);
  }
  return <Grid>{rows}</Grid>;
}
