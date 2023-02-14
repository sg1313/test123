import React, { useState } from "react";
import axios from "axios";
import List from "./List";

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

  // const { textRef, nicknameRef } = useRef();

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
    // setContent(e.target.value); // 이거 안하면 콘솔에 1 2 3 4 따로따로 찍힘 ...
  };

  const onClickButton = (e) => {
    console.log("💜️---게시글등록----💜️", values);
    // console.log("😺️--게시글등록----😺️", e.target.nickname);
    // console.log("--오늘날짜--", today);

    // input 박스 안에 넣은 값 등록하기
    axios
      .post("http://localhost:8080/board", {
        content: values.content,
        nickname: values.nickname,
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
  // const { name, value } = e.target;
  // setMessage((prevMessages) => ({
  //   ...prevMessages,
  //   [name]: value,
  // }));
  // console.log(e.target.value);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // 등록하기 버튼 누르면 알람창 이게 먼저 뜨네 ...
    alert(`등록내용 : ${values.nickname} & ${values.content}`);
  };

  return (
    <div>
      bts에게 응원 한마디씩 부탁합니다~~
      <br />
      <form onSubmit={handleSubmit} style={{ border: "1px solid black" }}>
        <input
          type="text"
          value={values.nickname || ""}
          name="nickname"
          onChange={onChange}
          required
          placeholder="닉네임"
          // ref={textRef}
        />
        <input
          type="text"
          value={values.content || ""}
          name="content"
          onChange={onChange}
          required
          // ref={nicknameRef}
        />
        <button onClick={onReset}>초기화</button>
        <button onClick={onClickButton}>등록하기 </button>
      </form>
      <List />
    </div>
  );
};

export default Board;
