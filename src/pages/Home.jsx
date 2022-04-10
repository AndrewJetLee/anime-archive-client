import Nav from "../components/Nav";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import { useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";

const Home = () => {
  const popularMangaRef = useRef();
  const [seasonalAnime, setSeasonalAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);
  const [myElementIsVisible, updateMyElementIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);

  useEffect(() => {
    getAllMedia();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) updateMyElementIsVisible(true);
    });
    observer.observe(popularMangaRef.current);
  }, []);

  useEffect(() => {
    getLazyMedia();
  }, [myElementIsVisible]);

  const getAllMedia = async () => {
    try {
      setLoading(true);
      const seasonalAnime = await jikanRequest.get("/seasons/now");
      setSeasonalAnime(seasonalAnime.data.data);
      const upcomingAnime = await jikanRequest.get("/seasons/upcoming");
      setUpcomingAnime(upcomingAnime.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getLazyMedia = async () => {
    try {
      setLazyLoading(true);
      const trendingAnime = await jikanRequest.get("/top/anime");
      setTrendingAnime(trendingAnime.data.data);
      const trendingManga = await jikanRequest.get("/top/manga");
      setTrendingManga(trendingManga.data.data);
      setLazyLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav />
      <Wrapper>
        <Hero />
        <Carousel
          title={"Currently Airing"}
          data={seasonalAnime}
          loading={loading}
          home={true}
        />
        <Carousel
          title={"Upcoming Anime"}
          data={upcomingAnime}
          loading={loading}
          home={true}
        />
        <Carousel
          title={"Popular Anime"}
          innerRef={popularMangaRef}
          data={trendingAnime}
          loading={lazyLoading}
          myElementIsVisible={myElementIsVisible}
          home={true}
        />
        <Carousel
          myElementIsVisible={myElementIsVisible}
          title={"Popular Manga"}
          data={trendingManga}
          loading={lazyLoading}
          home={true}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  min-height: 80vh;
  flex-direction: column;
`;
