import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Albums = () => {
  const [isOpen, setOpen] = useState();
  const [detail, setDetail] = useState();

  const albums = useParams();
  // console.log("params--->", albums);
  // console.log("앨범명:", albums.albums, "페이지 접속 !!");
  const albumName = albums.albums;
  console.log("albumName : ", albumName);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/discography/${albums.albums}`)
      .then((response) => {
        console.log("----axios response data----", response.data);
        // console.log("----axios response---------", response);
        console.log("response.data.name 갖고오기===>..", response.data.name);
        setDetail(response.data); // setDetail에 받아온 response.data 넣기
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("-------deatil-----", detail);
  console.log("----deatail.name--", detail?.name);
  // const albuminfo = Object?.values(detail);
  // console.log("---albuminfo---", albuminfo);
  // console.log("----옵셔널체이닝 외않되---", albuminfo)

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
    console.log("뒤로가기 작동");
  };

  return (
    <div>
      <h2>{`앨범 "${albums.albums}" 내용입니다`}</h2>
      <button onClick={onClickButton} style={{ border: "2px solid red" }}>
        {" "}
        뒤로가기{" "}
      </button>
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
      {isOpen && (
        <div>
          앨범 상세 내용 입니다 <br /> {detail?.content}{" "}
        </div>
      )}
      <br />
      <div>--------이미지 오는 자리-----------</div>
      <img
        src={`/images/${detail?.image}`}
        width="300px"
        height="300px"
        alt="proof"
      ></img>
      <div>
        앨범 소개 미니앨범인지, 정규앨범인지 디지털 어쩌구인지
        <br />
        {detail?.info}
      </div>
      <div>뮤직비디오</div>
      <div>트랙리스트</div>
    </div>
  );
};

export default Albums;
