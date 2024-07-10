import React from "react";
import "../../helper.css";
import "./FeaturedJobsArea.css";
import FeaturedJobCard from "../UiComponents/FeaturedJobCard/FeaturedJobCard";

const FeaturedJobsArea = () => {
  return (
    <div className="col">
      <h1 className="col paddingx">
        <div className="leftwhiteborder row flexgap10">
          <div className="red">Grub</div>
          <div>Digest</div>
        </div>
        <div className="leftredborder">Featured Jobs</div>
      </h1>
      <div className="row jobsarea paddingx">
        <FeaturedJobCard
          imgurl="https://www.masalaofindia.com/static/media/masala-of-india.c5a7d2004e43f4db1721.png"
          brand="Masala of India"
          location="Delhi"
          position="Barista"
          description="you'll craft exquisite coffee and tea beverages, enhancing our guests' dining experience with authentic Indian hospitality."
          experience="2 Years"
          timings="Full Time"
          postedon="7 September"
        />
        <FeaturedJobCard
          imgurl="https://grubdigest.com/static/media/logo.7aac2987043c27bdb212.png"
          brand="Grub Digest"
          location="Chennai"
          position="Bartender"
          description="you'll craft exquisite coffee and tea beverages, enhancing our guests' dining experience with authentic Indian hospitality."
          experience="1 Years"
          timings="Full Time"
          postedon="15 September"
        />
        <FeaturedJobCard
          imgurl="https://cdn.sanity.io/images/ocl5w36p/production/eaf9ae941361d173fdbd613ba600197b69471d50-100x88.png"
          brand="Taj Hotel"
          location="Bangalore"
          position="Cleaner"
          description="you'll craft exquisite coffee and tea beverages, enhancing our guests' dining experience with authentic Indian hospitality."
          experience="2 Years"
          timings="Part Time"
          postedon="19 October"
        />
        <FeaturedJobCard
          imgurl="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/logo/oberoi-hotels-logo/Hotels-and-Resorts.svg?la=en&hash=AD9230CF08FBD7777D3C6FCDF050E525"
          brand="Oberoi Hotel"
          location="Hyderabad"
          position="Chef"
          description="you'll craft exquisite coffee and tea beverages, enhancing our guests' dining experience with authentic Indian hospitality."
          experience="None"
          timings="Full Time"
          postedon="7 December"
        />
        <FeaturedJobCard
          imgurl="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/logo/oberoi-hotels-logo/Hotels-and-Resorts.svg?la=en&hash=AD9230CF08FBD7777D3C6FCDF050E525"
          brand="Oberoi Hotel"
          location="Hyderabad"
          position="Chef"
          description="you'll craft exquisite coffee and tea beverages, enhancing our guests' dining experience with authentic Indian hospitality."
          experience="None"
          timings="Full Time"
          postedon="7 December"
        />
        <FeaturedJobCard
          imgurl="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/logo/oberoi-hotels-logo/Hotels-and-Resorts.svg?la=en&hash=AD9230CF08FBD7777D3C6FCDF050E525"
          brand="Oberoi Hotel"
          location="Hyderabad"
          position="Chef"
          description="you'll craft exquisite coffee and tea beverages, enhancing our guests' dining experience with authentic Indian hospitality."
          experience="None"
          timings="Full Time"
          postedon="7 December"
        />
      </div>
    </div>
  );
};

export default FeaturedJobsArea;
