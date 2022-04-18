import styled from "@emotion/styled";
import React from "react";
import AiringTodayTvSection from "../apis/features/tv/airingToday";
import LatestTvSection from "../apis/features/tv/latest";
import OnTheAirTvSection from "../apis/features/tv/onTheAir";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const TvPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestTvSection />
          <AiringTodayTvSection />
          <OnTheAirTvSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default TvPage;
