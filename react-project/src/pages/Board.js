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
  const [content, setContent] = useState(); // axios.get에서 게시판 내용에 사용됨
  // const [message, setMessage] = useState({
  //   content: "",
  // });

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
    console.log(e.target.value);
    setText(e.target.value);
  };
  const onClickButton = (e) => {
    console.log("💜️---게시글등록----💜️", text);
    alert("등록하기 ㅇㅇㅇㅇㅇ" + text);
    // const { name, value } = e.target;
    // setMessage((prevMessages) => ({
    //   ...prevMessages,
    //   [name]: value,
    // }));
    // console.log(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setText(e.target.value);

  // };

  return (
    <div>
      bts에게 응원 한마디씩 부탁합니다~~
      <br />
      {/* <form onSubmit={handleSubmit} style={{ border: "1px solid black" }}> */}
      {/* <input type="text" name={nickname}/> */}
      <input type="text" value={text} name="content" onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <button onClick={onClickButton}>등록하기 </button>
      {/* </form> */}
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
