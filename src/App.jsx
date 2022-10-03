import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import styled from "styled-components";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Heading from "./components/Heading/Heading";

const Container = styled.div`
  margin: 1rem;
`;

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Heading />
        <CharacterCard />
        <EpisodesList />
      </Container>
    </QueryClientProvider>
  );
}
