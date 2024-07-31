import React from "react";
import { VectorMap } from "@react-jvectormap/core";

const mapData = [
  { code: "IN-RJ", value: 10000 },
  { code: "IN-MP", value: 800 },
  { code: "IN-DL", value: 900 },
  { code: "IN-KL", value: 500 },
];

class IndiaMapComponent extends React.Component {
  getdata(key) {
    const countryData = {};
    mapData.forEach((obj) => {
      countryData[obj.code] = obj.value;
    });
    return countryData[key];
  }

  getalldata() {
    const countryData = {};
    mapData.forEach((obj) => {
      countryData[obj.code] = obj.value;
    });
    return countryData;
  }

  handleshow2 = (e, el, code) => {
    el.html(el.html() + ` <br> Statics: ${this.getdata(code)}`);
  };

  render() {
    return (
      <div>
        <VectorMap
          map={"in_mill"}
          backgroundColor="transparent"
          focusOn={{
            x: 0.5,
            y: 0.5,
            scale: 0,
            animate: false,
          }}
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "500px",
          }}
          onRegionClick={(e, countryCode) => console.log(countryCode)} // gets the country code
          onRegionTipShow={this.handleshow2}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", // onclick color of state
            },
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: this.getalldata(), // can be directly served with API response or any data
                scale: ["#C8EEFF", "#0071A4"], // color range
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
      </div>
    );
  }
}

export default IndiaMapComponent;
