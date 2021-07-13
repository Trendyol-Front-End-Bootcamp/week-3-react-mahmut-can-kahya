import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  let { id } = useParams();
  console.log(id);
  return <div>assa</div>;
};

export default DetailPage;
