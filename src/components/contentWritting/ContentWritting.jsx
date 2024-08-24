import React from "react";
import { contentDetails } from "../../constants";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const ContentWritting = () => {
  return (
    <div className="content-writting-container">
      <div className="header">Content Writing & Prints</div>
      <div className="content-card">
        {contentDetails.map((content) => {
          const { id, image, path, listItems, header } = content;
          return (
            <Link to={path} key={id} className="content-card-item">
              <div className="card-image">
                <img
                  src={image}
                  alt={header}
                  width={id !== 3 ? 564 : 1268}
                  height={332}
                />
              </div>
              <div className="card-content">
                <div className="card-header">{header}</div>
              </div>
              <div className="card-lists">
                {listItems.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="card-list-item flex justify-start items-start"
                    >
                      <span className="mr-1 text-[30px]">
                        <LuDot />
                      </span>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentWritting;
