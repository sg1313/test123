import React from "react";
import { Link } from "react-router-dom";
import "../style/discography.css";

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
      <div className="titlefont">
      <div className="titlefont2">DISCOGRAPHY</div>
        </div>
      <p>앨범을 클릭하시면 상세페이지로 이동합니다</p>
      
      <div className="album-list">
        <ul>
          <li>
            <Link to="/discography/proof">
            <img src="https://ibighit.com/bts/images/bts/discography/proof/discography-cover.png" alt="proof"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/permission_to_dance">
            <img src="https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg" alt="ptd"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/butter">
              <img src="https://ibighit.com/bts/images/bts/discography/butter/butter-cover.jpg" alt="butter"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/Be">
              <img src="https://ibighit.com/bts/images/bts/discography/be/rwXJxHlQ87gEiJJynB1pmScl.jpg" alt="be"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/dynamite">
              <img src="https://ibighit.com/bts/images/bts/discography/dynamite/Q7gBkUusiDcIYljQOMX9ow6W.jpg" alt="dynamite"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/map_of_the_soul_7">
              <img src="https://ibighit.com/bts/images/bts/discography/map_of_the_soul-7/img01.jpg" alt="mapsoul7"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/map_of_the_soul_persona">
            <img src="https://ibighit.com/bts/images/bts/discography/map_of_the_soul-persona/album-cover.jpg" alt="persona"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/love_yourself_answer">
              <img src="https://ibighit.com/bts/images/bts/discography/love_yourself-answer/album-cover.jpg" alt="answer"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/love_yourself_tear">
              <img src="https://ibighit.com/bts/images/bts/discography/love_yourself-tear/album-cover.jpg" alt="tear"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/love_yourself_her">
              <img src="https://ibighit.com/bts/images/bts/discography/love_yourself-her/album-cover.jpg" alt="her"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/you_never_walk_alone">
              <img src="https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg" alt="ynwa"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/wings">
              <img src="https://ibighit.com/bts/images/bts/discography/wings/album-cover.jpg" alt="wings"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/hyyh_young_forever">
              <img src="https://ibighit.com/bts/images/bts/discography/young_forever/album-cover.jpg" alt="yongforever"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/hyyh_pt2">
              <img src="https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt2/album-cover.jpg" alt="pt2"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/hyyh_pt1">
              <img src="https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt1/album-cover.jpg" alt="pt1"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/dark_and_wild">
              <img src="https://ibighit.com/bts/images/bts/discography/dark_and_wild/album-cover.jpg" alt="darknwild"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/skool_luv_affair">
              <img src="https://ibighit.com/bts/images/bts/discography/skool_luv_affair/album-cover.jpg" alt="boyinluv"/></Link>
          </li>
          <li>
            <Link to="/discography/orul82">
              <img src="https://ibighit.com/bts/images/bts/discography/o_rul8_2/album-cover.jpg" alt="weon"/>
            </Link>
          </li>
          <li>
            <Link to="/discography/2cool4skool">
              <img src="https://ibighit.com/bts/images/bts/discography/2_cool_4_school/album-cover.jpg" alt="nomoredream"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Discography;
