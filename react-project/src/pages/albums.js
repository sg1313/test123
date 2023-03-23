import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {Button} from 'react-bootstrap';
import "../style/albums.css";

const Albums = () => {

  const [detail, setDetail] = useState();

  const albums = useParams();
  // console.log("params--->", albums);
  // console.log("🎶️앨범명:", albums.albums, "페이지 접속 !!");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/discography/${albums.albums}`)
      .then((response) => {
        // console.log("⏩️axios response data", response.data);
        setDetail(response.data); // setDetail에 받아온 response.data 넣기
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
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
        <div className="uppergroup-img">
      <img
        src={`/images/${detail?.image}`}
        alt={`${detail?.name}`}
        />
        </div>
        <div className="uppergroup-right">
        <div className="titlefont">
        {detail?.albumname}
      </div>
      <div className="box1">
        <div className="contentfont">
          <br/>
          {detail?.content.split('\\r\\n').map(line => {
            return (
              <div key={line.id}>{line}<br/></div>
            )
          })}
        </div>
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
            <table>
              <colgroup>
              <col width="600px"></col>
              </colgroup>
              <tbody>
        {detail?.tracklist.split('\\r\\n').map(line => {
          return (
              <tr>
                <td key={line.id}>{line}<br/></td>
              </tr>
              )
            })}
              </tbody>
            </table>
            {/* <span key={line.id}>{line}<br/></span> */}
      </div>
      </div>
    </div>
  );
};

export default Albums;
