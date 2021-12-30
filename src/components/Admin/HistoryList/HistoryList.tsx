import React from "react";
import { Link } from "react-router-dom";
import { nextArrow, prevArrow, SliderArrowIcon } from "../../../assets/icons";
import { IItem } from "../../../types/IItem";
import HistoryItems from "../../Placeholders/HistoryItems";
import s from './HistoryList.module.scss';
import Slider, { Settings } from "react-slick";

interface IHistoryList {
   items: IItem[],
   isLoading: boolean
}

const HistoryList: React.FC<IHistoryList> = ({ items, isLoading }) => {

   const settings: Settings = {
      slidesToShow: 6,
      slidesToScroll: 3,
      adaptiveHeight: true,
      arrows: true,
      infinite: false,
      nextArrow: <button>
         <div style={{ backgroundImage: `url(${nextArrow})` }} />
      </button>,
      prevArrow: <button>
         <div style={{ backgroundImage: `url(${prevArrow})` }} />
      </button>,
   }

   return (
      <Slider
         className={s.list}
         {...settings}
      >
         {isLoading ?
            <HistoryItems />
            : items
               ? items.map(({ id, image, name, createdAt }) => (
                  <div className={s.item} key={id} >
                     <div className={s.item_content}>
                        <div className={s.item_img}>
                           <img src={image} alt="img" />
                        </div>
                        <div className={s.item_footer}>
                           <div className={s.item_name}>
                              <span>{name}</span>
                           </div>
                           <div className={s.item_date}>
                              <span>
                                 {new Date(createdAt).toLocaleDateString()}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
               : null}
      </Slider>
   )
}

export default HistoryList
