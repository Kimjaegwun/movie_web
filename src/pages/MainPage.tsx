import styled from "@emotion/styled";
import React from "react";
import LastestMovieSection from "../apis/features/movie/latest";
import NowPlayingSection from "../apis/features/movie/nowPlaying";
import PopularSection from "../apis/features/movie/popular";
import TopRaterSection from "../apis/features/movie/topRate";
import UpComingSection from "../apis/features/movie/upcoming";
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

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LastestMovieSection />
          <NowPlayingSection />
          <PopularSection />
          <TopRaterSection />
          <UpComingSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
