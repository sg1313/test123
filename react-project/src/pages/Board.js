import React, { useState } from "react";

const Board = () => {
  const [text, setText] = useState();

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
    </div>
  );
};

export default Board;
