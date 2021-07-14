import React, { useCallback, useRef } from "react";
import Card from "../Card";
import { ContainerList } from "./styles";

const CharList = ({ chars, loading, page, pages, setPage }) => {
  const observer = useRef();
  const lastCharElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        console.log(pages);
        console.log(page);

        if (entries[0].isIntersecting && pages > page) {
          setPage(page + 1);
          console.log("Visible");
        }
      });
      if (node) {
        observer.current.observe(node);
      }
      console.log(node);
    },
    [loading]
  );
  return (
    <ContainerList>
      {chars.map((char, index) => {
        if (chars.length === index + 1) {
          return <Card ref={lastCharElementRef} key={index} {...char} />;
        } else {
          return <Card key={index} {...char} />;
        }
      })}
    </ContainerList>
  );
};

export default CharList;
