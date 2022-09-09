import styled from "styled-components";

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const SubTitle = styled(Title)`
  margin-bottom: 5rem;
  font-size: 2rem;
  font-weight: 300;
`;

const SmallTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
  font-size: 1.5rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  color: grey;
`;

export default function Heading() {
  return (
    <div>
      <Title>Rick and Morty fan website.</Title>
      <SubTitle>
        Here you can find colection of characters, locations and episodes data.
      </SubTitle>
      <SmallTitle>Random dude:</SmallTitle>
    </div>
  );
}
