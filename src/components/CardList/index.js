import React, { useCallback, useRef } from "react";
import Card from "../Card";
import { ContainerList } from "./styles";

const CharList = ({ chars, loading, page, pageCount, setPage }) => {
  const observer = useRef();

  //Bir dinleyici ile listenin son elemanına gelinip gelinmediği kontrolü yapılır.
  const lastCharElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        //listenin sonuna gelindiğinde eğer sayfa varsa sayfa numarası arttırılır ve apiye istek atılır.
        if (entries[0].isIntersecting && pageCount > page) {
          console.log("girdi");
          setPage(page + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
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
