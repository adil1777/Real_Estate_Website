import React from 'react'
import { Swiper, SwiperSlide ,useSwiper} from 'swiper/react';
import 'swiper/css';
import './Residencies.css'
//  import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import PropertyCard from '../PropertyCard/PropertyCard';
import UseProperties from '../../hooks/UseProperties';
import { PuffLoader } from 'react-spinners';
const Residencies = () => {

  const{data, isError, isLoading}= UseProperties()
  if(isError){
    return(
      <div className="wrapper">
        <span>Error while fetching Data</span>
      </div>

    )
  }
if(isLoading){
  return (
     <div className="wrapper flexCenter" style={{height: "60vh"}}>
          <PuffLoader 
            height="80"
            width="80"
            radius={1}
            colors= "#4066ff"
            aria-label="puff-loading"
          />
     </div>
  );
}  
// console.log(data);
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-heads flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular residencies</span>
        </div>
        <Swiper {...sliderSettings} >
         <SlideNextButton />
         {/* slider */}
            {data.slice(0,8).map((card,i)=> (
                  <SwiperSlide key={i}>
                    <PropertyCard card={card}/>
                  </SwiperSlide>
                ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Residencies

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};