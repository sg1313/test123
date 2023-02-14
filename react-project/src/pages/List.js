import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [content, setContent] = useState(); // axios.get에서 게시판 내용에 사용됨

  // 데이터베이스에 있는 방명록 불러오기
  useEffect(() => {
    axios
      .get("http://localhost:8080/board")
      .then((res) => {
        console.log(res.data); // 받아온 데이터 콘솔에 찍어보자
        setContent(res.data); // setContent에 찐 내용인 response.data를 넣어준다.
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      {content?.map((n) => (
        <li key={n.id}>
          {n.nickname}
          <br />
          {n.content}
          <br />
          {n.date}
        </li>
      ))}
    </ul>
  );
};

export default List;
