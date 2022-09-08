import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import EpisodeCard from "./components/EpisodesList/EpisodeCard/EpisodeCard";
import styled from "styled-components";
import EpisodesList from "./components/EpisodesList/EpisodesList";

const Container = styled.div`
  margin: 1rem;
`;

export default function App() {
  return (
    <Container>
      <CharacterCard />
      <EpisodesList />
    </Container>
  );
}
