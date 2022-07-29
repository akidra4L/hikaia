import React, { Fragment } from "react";
import Faq from "react-faq-component";
import { data } from "./data";

export const FAQ = () => {
  return (
    <div className="faq">
      <Fragment>
        <Faq
          data={data}
          styles={{
            bgColor: "#fdeed9",
            rowTitleColor: "light",
            rowTitleTextSize: "25px",
            rowContentColor: "black",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            arrowColor: "black",
          }}
          config={{
            animate: true,
          }}
        />
      </Fragment>
    </div>
  );
};
