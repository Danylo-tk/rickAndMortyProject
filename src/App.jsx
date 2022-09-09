import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import styled from "styled-components";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Heading from "./components/Heading/Heading";

const Container = styled.div`
  margin: 1rem;
`;

export default function App() {
  return (
    <Container>
      <Heading />
      <CharacterCard />
      <EpisodesList />
    </Container>
  );
}
