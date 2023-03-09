import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../style/albums.css";

const Albums = () => {
  const [isOpen, setOpen] = useState();
  const [detail, setDetail] = useState();

  const albums = useParams();
  // console.log("🎹️params--->", albums);
  // console.log("🎶️앨범명:", albums.albums, "페이지 접속 !!");
  const albumName = albums.albums;
  // console.log("🎵️--------albumName : ", albumName);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/discography/${albums.albums}`)
      .then((response) => {
        console.log("⏩️⏩️----axios response data----", response.data);
        // console.log("----axios response---------", response);
        console.log(
          "🔵️🔵️🔵️🔵️🔵️🔵️response.data.name 갖고오기🔵️🔵️🔵️🔵️🔵️🔵️",
          response.data.name
        );
        // const axioscontent = response.data.content;
        // console.log("💚💚콘텐트내용------", axioscontent);
        const str = response.data.content.replace(/\\r\\n/g,"<br/>");
        console.log("🖤🖤", str);
        setDetail(response.data); // setDetail에 받아온 response.data 넣기
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log("🍎️-----deatil-----🍎️", detail);
  // console.log("💜️----deatail.name----💜️", detail?.name);
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
      <div className="titlefont">
      {`앨범 "${albums.albums}" 내용입니다`}
      </div>
      <button onClick={onClickButton} style={{ border: "2px solid red" }}>
        {" "}
        뒤로가기{" "}
      </button>

      <br />
      <p>--------이미지 오는 자리-----------</p>
      <img
        src={`/images/${detail?.image}`}
        width="300px"
        height="300px"
        alt={`${detail?.name}`}
      ></img>
      <div className="contentfont">
      <div className="box1">
        {/* <button
          onClick={() => {
            setOpen((e) => !e);
          }}
        >
          {isOpen ? "간략히" : "더보기"}
        </button> */}
      {/* {isOpen && ( */}
        <div>
          ----------앨범 상세 내용-------------
          <br/>
          {detail?.content.split('\\r\\n').map(line => {
            return (
              <span key={line.id}>{line}<br/></span>
            )
          })}
        </div>
      {/* )} */}
      </div>
      <br/>
      <div className="box2">
        RELEASE : {detail?.release}
      </div>
      <br/>
      <div className="box3">
       INFO :  {detail?.info}
      </div>
      <br/>
      <div className="box4">뮤직비디오</div>
      <br/>
      <div className="box5">
        트랙리스트
        <br />
        {detail?.tracklist}
      </div>
      </div>
    </div>
  );
};

export default Albums;
