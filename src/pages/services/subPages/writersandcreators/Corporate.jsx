import React from "react";
import EventSection from "../../../../components/services_contact/Events";
import corporate from "../../../../assets/corporate_events.png";

const CorporateEvent = () => {
  return (
    <div>
      <EventSection header="Corporate Events" image={corporate} />
    </div>
  );
};

export default CorporateEvent;
