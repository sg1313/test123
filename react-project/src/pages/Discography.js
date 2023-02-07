import React from "react";
import { Link } from "react-router-dom";

const Discography = () => {
  return (
    <div>
      방탄 음반 목록
      <p>
        앨범명을 클릭하면 상세페이지로 이동한다. <br /> 각 앨범명마다 내용을
        다르게 하고 싶다 ...
      </p>
      <p>
        주소 창에는 discography/detail/proof 아니면 <br />
        discography/proof... 할 것인지.. 고민해봐야 한다. ㅠㅠ 파라미터로
        가져오는게 나을거같다..{" "}
      </p>
      <p>여기 화면에서 서버로 axios로 요청해야 하구만 .. !! </p>
      <div>
        <ul>
          <li>
            <Link to="/discography/albums">Proof</Link>
          </li>
          <li>Butter</li>
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
