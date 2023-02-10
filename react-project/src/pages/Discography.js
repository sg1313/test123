import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Discography = () => {
  // const [detail, setDetail] = useState(false); // 현재 false 니까
  // console.log("discography page 입니다 ");
  // console.log("현재 detail값 --->", detail);

  //onClickLink 누르면 useEffect 발동 !!..
  // useEffect(() => {
  //   setDetail(true);
  //   console.log("detail 값(useEffect발동) ---> ", detail);
  // }, []);

  // const onClickLink = (e) => {
  //   setDetail((e) => !e); // false를 true로 바꿔주기
  //   console.log("detail 값 --->", detail);
  // };

  return (
    <div>
      <p>앨범명을 클릭하면 상세페이지로 이동</p>

      <div>
        <ul>
          <li>
            <Link to="/discography/proof">Proof</Link>
          </li>
          <li>
            <Link to="/discography/butter">Butter</Link>
          </li>
          <li>
            <Link to="/discography/Be">Be</Link>
          </li>
          {/* <li>
            <Link to="/discography/dynamite">dynamite</Link>
          </li>
          <li>
            <Link to="/discography/mapofthesoul7">map of the soul 7</Link>
          </li>
          <li>
            <Link to="/discography/mapofthesoul_persona">
              map of the soul Persona
            </Link>
          </li>
          <li>
            <Link to="/discography/loveyourlsef_answer">
              LoveYourlsef Answer
            </Link>
          </li>
          <li>
            <Link to="/discography/loveyourself_tear">LoveYourlsef Tear</Link>
          </li>
          <li>
            <Link to="/discography/loveyourself_her">LoveYourlsef Her</Link>
          </li>
          <li>
            <Link to="/discography/youneverwalkalone">
              you never walk alone
            </Link>
          </li>
          <li>
            <Link to="/discography/darkandwild">dark and wild</Link>
          </li>
          <li>
            <Link to="/discography/skoolluvaffair">skool luv affair</Link>
          </li>
          <li>
            <Link to="/discography/orul82">o ru l8 2</Link>
          </li>
          <li>
            <Link to="/discography/2cool4skool">2cool4skool</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Discography;
