import React, {useState} from 'react';
import styled from 'styled-components'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../components.css'


const SlidePost = styled.img`
  transition: 2s;
  //width: 100%;
  //height: 100%;
  //object-fit: cover;
  width: 230px !important;
  height: 340px !important;
  border-radius: 10px;
  object-fit: cover;
`

const SlideShowInfo = styled.div`
  width: 300px;
  /* background: aliceblue; */
  height: 100%;
  text-align: center;
  font-size: 34px;
  color: gold;
  margin: 378px 0 0 -58px;
`
const SlideShowImg = styled.div`
  width: 400px;
  margin-top: 50px;

`


const Slider = styled.section`
  position: relative;
  height: 440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2b2a2a;
  border-bottom: solid 15px black;
  border-radius: 12px;

`

const ImageSlider = ({movies}) => {
    const [current, setCurrent] = useState(0);
    const length = movies.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };

    if (!Array.isArray(movies) || movies.length <= 0) {
        return null;
    }

    setInterval(function () {
        nextSlide()
    }, 5000)

    return (
        <Slider>
            <SlideShowInfo>
                New this week
            </SlideShowInfo>

            {/*<div onClick={prevSlide}>left</div>*/}
            {/*<div onClick={nextSlide}>right</div>*/}
            {/*<FaArrowAltCircleLeft  onClick={prevSlide}/>*/}
            {/*<SlideShowImg>*/}
            {movies.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <SlidePost src={slide.image} alt='image'/>
                        )}
                    </div>


                );
            })}
            {/*</SlideShowImg>*/}

        </Slider>
    );
};

export default ImageSlider;