import React from "react";
import "../../helper.css";
import "./CategoryArea.css";
import CategoryCard from "../UiComponents/CategoryCard/CategoryCard";

const CategoryArea = () => {
  return (
    <div className="column paddingx">
      <h1 className="col">
        <div className="row leftwhiteborder flexgap10">Browse
          <div className="red">Jobs</div></div>
        <div className="leftredborder">by Category</div>
      </h1>
      <div className="row categoryarea">
        <CategoryCard
          category={"Floor"}
          imgurl={
            "https://media.istockphoto.com/id/1264430572/photo/worker-mopping-the-floor-of-a-restaurant.jpg?s=612x612&w=0&k=20&c=3r80AiqfvIGz2wp-RrkCJukOzJLm6XtBzPM1vLIyT0Y="
          }
        />
        <CategoryCard
          category={"Kitchen"}
          imgurl={
            "https://media.istockphoto.com/id/1412805837/photo/commercial-kitchen-with-kitchen-utensils-equipment-and-food-products.jpg?s=612x612&w=0&k=20&c=uNKNDdAVTCEm65VSc25NnhnHe0jeLnwWmJgboWVJ6lg="
          }
        />
        <CategoryCard
          category={"Bar"}
          imgurl={
            "https://media.istockphoto.com/id/1129343599/photo/stylish-bar-counter.jpg?s=612x612&w=0&k=20&c=NVPtFXlYagTI-qixnNYtLO7rcGQhMlIQWrDhSYBEIHs="
          }
        />
        <CategoryCard
          category={"Barista"}
          imgurl={
            "https://media.istockphoto.com/id/1282882269/photo/barista-making-latte-art-shot-focus-in-cup-of-milk-and-coffee-vintage-filter-image.jpg?s=612x612&w=0&k=20&c=DweV1Fmu1OMvMa8Qh0AfCMYnULO5Lw30jApMJzCiT6E="
          }
        />
        <CategoryCard
          category={"Counter"}
          imgurl={
            "https://media.istockphoto.com/id/1414502411/photo/happy-woman-putting-groceries-on-checkout-counter-in-supermarket.jpg?s=612x612&w=0&k=20&c=_RthCC48VLhkwXCBOvE8QdoeQC1VKRwM6ycm-IF_4lA="
          }
        />
        <CategoryCard
          category={"Delivery"}
          imgurl={
            "https://media.istockphoto.com/id/1296986175/photo/young-man-working-for-a-food-delivery-service-checking-with-road-motorcycle-in-the-city.jpg?s=612x612&w=0&k=20&c=TXsIHrSIyFlkHSpJq_AhX3V0l9X_U79e9cfpdMNH5LQ="
          }
        />
        <CategoryCard
          category={"Managment"}
          imgurl={
            "https://media.istockphoto.com/id/629203922/photo/man-working-at-a-grocery-store.jpg?s=612x612&w=0&k=20&c=AHOmVbP_lRYORBNo-6F3OYETVRJIQWz2_Ppmb-kSJDc="
          }
        />
        <CategoryCard
          category={"Marketing"}
          imgurl={
            "https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.jpg?s=612x612&w=0&k=20&c=R6-SufHacJ6bCnviq37kik2Jl6RMdECybcUpEoRuMLs="
          }
        />
      </div>
    </div>
  );
};

export default CategoryArea;
