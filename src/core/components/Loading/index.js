import React from "react";
import { Loader } from "./styles";

const Loading = ({ loading }) => {
  return (
    loading && (
      <Loader>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loader>
    )
  );
};

export default Loading;
