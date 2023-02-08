import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Albums = () => {
  const albums = useParams();
  console.log("params--->", albums);
  console.log("앨범명:", albums.albums, "페이지 접속 !!");

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState();
  const onClickButton = () => {
    navigate(-1);
    console.log("setDetail false");
  };

  return (
    <div>
      <h2>{`앨범 "${albums}" 내용입니다`}</h2>
      <button onClick={onClickButton}> 뒤로가기 </button>
      <div style={{ border: "1px solid black", width: "200px" }}>
        앨범 내용 최고야 개쩜 ㅇㅇ
        <button
          onClick={() => {
            setOpen((e) => !e);
          }}
        >
          {isOpen ? "간략히" : "더보기"}
        </button>
      </div>
      {isOpen && <div>Proof 앨범 상세 내용 입니다 개쩔어 </div>}
      <br />
      <div>--------이미지 오는 자리-----------</div>
      <img
        src="https://ibighit.com/bts/images/bts/discography/proof/discography-cover.png"
        width="300px"
        height="300px"
        alt="proof"
      ></img>
      {/* <p>{params.albums}</p> */}
      <div>앨범 소개 미니앨범인지, 정규앨범인지 디지털 어쩌구인지</div>
      <div>뮤직비디오</div>
      <div>트랙리스트</div>
    </div>
  );
};

export default Albums;
