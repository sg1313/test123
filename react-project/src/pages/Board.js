import React, { useEffect, useState } from "react";
import axios from "axios";

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

// axios
//   .get("http://localhost:8080/board")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const Board = () => {
  const [text, setText] = useState();
  const [content, setContent] = useState();
  // const [content, setContent] = useState();
  // const [date, setDate] = useState();

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

  const onReset = () => {
    setText("");
  };

  const onChange = (e) => {
    // setText(e.target.value);
    console.log(e.target.value);
  };
  const onClickButton = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      bts에게 응원 한마디씩 부탁합니다~~
      <br />
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <button onClick={onClickButton}>등록하기 </button>
      <br />
      <ul>{text}</ul>
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
    </div>
  );
};

export default Board;
