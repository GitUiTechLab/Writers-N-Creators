import React from "react";
import EventSection from "../../../../components/services_contact/Events";
import department from "../../../../assets/department.png";

const GovernmentEvent = () => {
  return (
    <div>
      <EventSection header="Government Departments Event" image={department} />
    </div>
  );
};

export default GovernmentEvent;
