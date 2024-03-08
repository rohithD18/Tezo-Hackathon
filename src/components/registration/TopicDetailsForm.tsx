import React from "react";

const TopicDetailsForm: React.FC = () => {
  return (
    <div>
      <h5>Topic Details</h5>
      <p>Please enter the details of the topic you will be working on</p>
      <div className="topicSec">
        <p>Mention Topic</p>
        <input type="text" placeholder="Enter the topic" />
      </div>
      <div className="descriptionSec">
        <p>Topic Description</p>
        <textarea placeholder="Enter the topic description"></textarea>
      </div>
    </div>
  );
};

export default TopicDetailsForm;
