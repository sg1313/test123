import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import {Form, Button} from 'react-bootstrap';
import "../style/board.css";

const Board = () => {
  // const [content, setContent] = useState();
  // const [nickname, setNickname] = useState();

  const [values, setValues] = useState({
    content: "",
    nickname: "",
    // date: today,
  });

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
    // console.log("---게시글등록", values);
    const userData = {
      nickname : values.nickname,
      content : values.content
    };
    // input 박스 안에 넣은 값 등록하기
    axios
      .post("http://localhost:8080/board", userData
      )
      .then((res) => {
        // console.log("🗨️전송완료", res.data);
        setValues(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    alert("등록 완료!");
  };

  return (
    <div className="b-wrapper">
      <div className="titlefont">
      BTS에게 따뜻한 응원 한마디 남겨주세요!
      </div>
      <br />
      <Form onSubmit={handleSubmit} className="form">
      <Form.Group className="text-1-n">
        <Form.Label>닉네임</Form.Label>
        <Form.Control type="text"
          value={values.nickname || ""}
          name="nickname"
          onChange={onChange}
          required 
          // ref={nicknameRef}
          maxLength={10}/>
      </Form.Group>
      <Form.Group className="text-1-c">
        <Form.Label>내용</Form.Label>
        <div className="text-2">💜최대 100글자 까지 입력이 가능합니다.</div>
        <Form.Control
          as="textarea"
          rows={3}
          className="textarea"
          value={values.content || ""}
          name="content"
          onChange={onChange}
          required
          // ref={contentRef}
          maxLength={100}
          />
      </Form.Group>
         <Button variant="dark" onClick={onReset} className="reset" type="button">초기화</Button>
         <Button variant="dark" onClick={onClickButton} type="submit">등록하기</Button>
        {/* <button onClick={onReset}>초기화</button>
        <button onClick={onClickButton}>등록하기 </button> */}
      </Form>
      <div className="list">

      <List />
      </div>
    </div>
  );
};

export default Board;
