import React from "react";

export const SummaryCard = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <div className="top-info">
        <div className="card-name">{props.data.name}</div>
        <div className="value-wrapper">
          {props.data.icon !== undefined && (
            <img alt="Icon" className="card-icon" src={props.data.icon} />
          )}
          <div className="card-value">{props.data.value}</div>
        </div>
      </div>

      <div className="bottom-info">
        {props.data.detail.map((item) => {
          return (
            <div className="detail-item" key={item.name}>
              <label>{item.name}</label>
              <div className="detail-value">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
