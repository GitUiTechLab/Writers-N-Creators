import React from "react";
import EventSection from "../../../../components/services_contact/Events";
import food from "../../../../assets/foodandfest.png";

const FoodFestEvent = () => {
  return (
    <div>
      <EventSection header="Food and Cultural Festivals" image={food} />
    </div>
  );
};

export default FoodFestEvent;
