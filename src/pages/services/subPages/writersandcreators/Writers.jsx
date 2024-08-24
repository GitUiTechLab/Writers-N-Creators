import React from "react";
import EventSection from "../../../../components/services_contact/Events";
import corporate from "../../../../assets/corporate_events.png"; // Replace with the appropriate path

const WritersEvent = () => {
  return (
    <div>
      <EventSection
        header="Writers And Creators Home Creation"
        image={corporate}
      />
      {/* Add any additional sections or content here */}
    </div>
  );
};

export default WritersEvent;
