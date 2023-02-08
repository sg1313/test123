import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Discography = () => {
  const [detail, setDetail] = useState(false); // 현재 false 니까
  // console.log("discography page 입니다 ");
  // console.log("현재 detail값 --->", detail);

  //onClickLink 누르면 useEffect 발동 !!..
  useEffect(() => {
    setDetail(true);
    console.log("detail 값(useEffect발동) ---> ", detail);
  }, []);

  const onClickLink = (e) => {
    setDetail((e) => !e); // false를 true로 바꿔주기
    console.log("detail 값 --->", detail);
  };

  return (
    <div>
      {/* <p>
        앨범명을 클릭하면 상세페이지로 이동한다. <br /> 각 앨범명마다 내용을
        다르게 하기
      </p>
      <p>여기 화면에서 서버로 axios로 요청해야 하구만 .. !! </p> */}
      {detail ? <Outlet /> : <div> ----앨범목록---- </div>}
      {/* detail이 true면 outlet 작동해서 앨범상세 보여주기, 그렇지 않으면 목록 보여주기 */}

      <div>
        <ul>
          <li>
            <Link to="/discography/proof" onClick={onClickLink}>
              Proof
            </Link>
          </li>
          <li>
            <Link to="/discography/butter">Butter</Link>
          </li>
          <li>Be</li>
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
