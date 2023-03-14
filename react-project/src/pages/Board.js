import React, { useState, useRef } from "react";
import axios from "axios";
import List from "./List";
import {Form, Button} from 'react-bootstrap';
import "../style/board.css";

// const getData = async () => {
//   try {
//     const response = await axios.get("http://localhost:8080/board");
//     console.log("----response-----", response);
//     console.log("--response.data--", response.data);
//   } catch (error) {
//     console.log("----에러----", error);
//   }
// };
// getData();

const Board = () => {
  // const [content, setContent] = useState();
  // const [nickname, setNickname] = useState();
  // const today = new Date();
  const [values, setValues] = useState({
    content: "",
    nickname: "",
    // date: today,
  });

  const { contentRef, nicknameRef } = useRef();

  const onReset = () => {
    setValues("");
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      // key값 : value 값. key로 input의 name을, value로 input에 입력한 '값'으로 한다.
    });
    console.log(e.target.value);
  };

  const onClickButton = (e) => {
    console.log("💜️---게시글등록----💜️", values);

    // input 박스 안에 넣은 값 등록하기
    axios
      .post("http://localhost:8080/board", {
        content: contentRef.current.value,
        nickname: nicknameRef.current.value,
        // date: today,
      })
      .then((res) => {
        console.log("🗨️🗨️🗨️🗨️🗨️🗨️----res.data", res.data);
        alert("등록완료 !!");
        // setContent(res.data);
        // setNickname(res.data);
        setValues(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // 등록하기 버튼 누르면 알람창 이게 먼저 뜨네 ...
    alert(`등록내용 : ${values.nickname} & ${values.content}`);
  };

  return (
    <div className="wrapper">
      <div className="titlefont">
      BTS에게 따뜻한 응원 한마디 남겨주세요!
      </div>
      <br />
      <form onSubmit={handleSubmit} className="box1">
      <Form.Group className="text-1">
        <Form.Label>닉네임</Form.Label>
        <Form.Control type="text"
          value={values.nickname || ""}
          name="nickname"
          onChange={onChange}
          required ref={nicknameRef}/>
      </Form.Group>
      <Form.Group className="text-1">
        <Form.Label>내용</Form.Label>
        <div className="text-2">💜최대 100글자 까지 입력이 가능합니다.</div>
        <Form.Control
          as="textarea"
          rows={4}
          className="textarea"
          value={values.content || ""}
          name="content"
          onChange={onChange}
          required
          ref={contentRef}
          maxLength={100}
          />
      </Form.Group>
{/* 
        <input
          type="text"
          value={values.nickname || ""}
          name="nickname"
          onChange={onChange}
          required
          placeholder="닉네임"
          ref={nicknameRef}
        /> */}
        {/* <input
          type="text"
          value={values.content || ""}
          name="content"
          onChange={onChange}
          required
          ref={contentRef}
        /> */}
         <Button variant="dark" onClick={onReset} className="reset">초기화</Button>
         <Button variant="dark" onClick={onClickButton}>등록하기</Button>
        <button onClick={onReset}>초기화</button>
        <button onClick={onClickButton}>등록하기 </button>
      </form>
      <div className="list">

      <List />
      </div>
    </div>
  );
};

export default Board;
