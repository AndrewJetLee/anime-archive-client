import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled, { css } from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import CarouselItem from "./CarouselItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Carousel = ({ title, data, loading, innerRef, myElementIsVisible, home }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Currently Airing") {
      navigate("/anime/season");
    } else if (title === "Upcoming Anime") {
      navigate("/anime/season");
    } else if (title === "Popular Anime") {
      navigate("/browse/top/anime");
    } else {
      navigate("/browse/top/manga");
    }
  };

  return (
    <Container>
      <Title ref={innerRef} onClick={handleClick} home={home}>
        {title} <KeyboardArrowRightIcon className="rightIcon" />
      </Title>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerGroup={7}
        slidesPerView={7}
      >
        {loading || myElementIsVisible === false ? (
          <>
            {new Array(10).fill(" ").map((item, i) => (
              <SwiperSlide key={i}>
                <SkeletonCarouselItem>
                  <Skeleton width="100%" height="280px" />
                </SkeletonCarouselItem>
              </SwiperSlide>
            ))}
          </>
        ) : (
          data.map((item, i) => (
            <SwiperSlide key={i}>
              <CarouselItem item={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  margin-bottom: 20px;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.theme.tertiary};
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: ${(props) => (props.size ? props.size : "1.7rem")};
  padding-bottom: 5px;
  background-color: ${(props) => props.theme.secondary};
  padding: ${(props) => (props.padding ? props.padding : "12px")};
  border-left: 3px solid ${(props) => props.theme.tertiary};
  ${(props) =>
    props.home &&
    css`
      transition: all 0.167s ease-in-out;
      cursor: pointer;
      .rightIcon {
        font-size: 2.4rem;
        color: black;
        transition: color 0.167s ease-in-out;
      }
      :hover {
        background-color: #e6e3e3;
        color: ${(props) => props.theme.tertiary};
        .rightIcon {
          color: ${(props) => props.theme.tertiary};
        }
      }
    `}
`;

const SkeletonCarouselItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.16s;
  position: relative;
  height: 290px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
