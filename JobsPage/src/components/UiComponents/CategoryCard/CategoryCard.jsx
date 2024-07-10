import React from "react";
import '../../../helper.css'
import './CategoryCard.css'
const CategoryCard = ({category,imgurl}) => {
  return (
    <div className="col center card">
        <img src={imgurl} alt="Image" />
        {/* <img src="https://grubdigest.com/static/media/grub-web-banner.e4374892f3219c3a773e.png" alt="" /> */}
        <div className="size-18 cardtitle">{category}</div>
    </div>
  );
};

export default CategoryCard;
