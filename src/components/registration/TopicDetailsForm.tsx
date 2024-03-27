import React, { useState } from "react";

const TopicDetailsForm: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [technology, setTechnology] = useState<string>("");
  const [topicDesc, setTopicDesc] = useState<string>("");
  console.log(topic, technology, topicDesc);

  return (
    <div>
      <p id="selectMemHead">Topic Details</p>
      <p id="infoHeading1">
        Please enter the details of the topic you will be working on
      </p>
      <div className="topicSec">
        <p>Mention Topic</p>
        <input
          type="text"
          placeholder="Enter the topic"
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <div className="topicSec">
        <p>Technology</p>
        <input
          type="text"
          placeholder="Enter the technology"
          onChange={(e) => setTechnology(e.target.value)}
        />
      </div>
      <div className="descriptionSec">
        <p>Topic Description</p>
        <textarea
          placeholder="Enter the topic description"
          onChange={(e) => setTopicDesc(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TopicDetailsForm;
