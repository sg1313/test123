import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {Button} from 'react-bootstrap';
import "../style/albums.css";

const Albums = () => {
  // const [isOpen, setOpen] = useState();
  const [detail, setDetail] = useState();

  const albums = useParams();
  // console.log("🎹️params--->", albums);
  // console.log("🎶️앨범명:", albums.albums, "페이지 접속 !!");
  // const albumName = albums.albums;
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
      <Button variant="dark"
      onClick={onClickButton}>
        {" "}
        뒤로가기{" "}
      </Button>
      <br />
      <div className="uppergroup">

      <img
        src={`/images/${detail?.image}`}
        alt={`${detail?.name}`}
        />
        <div className="uppergroup-right">
        <div className="titlefont">
        {detail?.albumname}
        {/* {`앨범 "${albums.albums}" 내용입니다`} */}
      </div>
      <div className="box1">
        {/* <button
          onClick={() => {
            setOpen((e) => !e);
          }}
        >
          {isOpen ? "간략히" : "더보기"}
        </button> */}
      {/* {isOpen && ( */}
        <div className="contentfont">
          ----------앨범 상세 내용-------------
          <br/>
          {detail?.content.split('\\r\\n').map(line => {
            return (
              <div key={line.id}>{line}<br/></div>
            )
          })}
        </div>
      {/* )} */}
      </div>
        </div>
        </div>
      <div className="contentfont">

      <br/>
      <div className="box2">
        <div className="subtitle">
        <span>INFO</span>
        </div>

        {detail?.info}
        <br/>
        RELEASE {detail?.release}
      </div>
      <br/>
      <div className="box3">
        <div className="subtitle"> 
        <span>Track List</span>
        </div>
        {/* {detail?.tracklist} */}

        {detail?.tracklist.split('\\r\\n').map(line => {
          return (
            <table>
              <colgroup>
              <col width="300px"></col>
              </colgroup>
              <tbody>
              <tr>
                <td key={line.id}>{line}<br/></td>
              </tr>
              </tbody>
            </table>
              // <span key={line.id}>{line}<br/></span>
              )
            })}
      </div>
      </div>
    </div>
  );
};

export default Albums;
