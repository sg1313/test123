import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style/list.css";

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


    const onClickdate = () => {
      const list = document.getElementsByClassName("text-3-date");
      for (let i = 0; i < list.length; i++) {
        //  각 list 요소 출력
        // console.log('리스트~~~~~', list[i].innerText);
        const innertext = list[i].innerText;
        const car = new Date(innertext);
        // const newcar = car.getFullYear(car);
        // console.log('---등록날짜 가져오기~~~', car.getDate());
        const map = {
          mm : car.getMonth() + 1,
          dd : car.getDate(),
          yyyy : car.getFullYear()
        }
        
      };
      const output = `${yyyy}년 ${mm}월 ${dd}일`;

      
      }

    const formatDate = (date, format) => {

      }

  return (
    <div>
      <button onClick={onClickdate}>날짜전체보기</button>
    <ul className="contentfont">
      {content?.map((n) => (
        <li key={n.id} className="text-3">
          <div className="text-3-n">
            💜닉네임💜 {n.nickname}
          </div>
          <div className="arrow_box">
            {n.content}
          <br />
          <div className="text-3-date">
            {n.date} 
            </div>
          </div>
        </li>
      ))}
    </ul>
      </div>
  );
};

export default List;
