import React from "react";
import { Link } from "react-router-dom";

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

      <div className="contentfont">
        <ul>
          <li>
            <Link to="/discography/proof">Proof</Link>
          </li>
          <li>
            <Link to="/discography/permission_to_dance">
              Permission To Dance
            </Link>
          </li>
          <li>
            <Link to="/discography/butter">BUTTER</Link>
          </li>
          <li>
            <Link to="/discography/Be">BE</Link>
          </li>
          <li>
            <Link to="/discography/dynamite">DYNAMITE</Link>
          </li>
          <li>
            <Link to="/discography/map_of_the_soul_7">map of the soul 7</Link>
          </li>
          <li>
            <Link to="/discography/map_of_the_soul_persona">
              map of the soul Persona
            </Link>
          </li>
          <li>
            <Link to="/discography/love_yourself_answer">
              LoveYourlsef Answer
            </Link>
          </li>
          <li>
            <Link to="/discography/love_yourself_tear">LoveYourlsef Tear</Link>
          </li>
          <li>
            <Link to="/discography/love_yourself_her">LoveYourlsef Her</Link>
          </li>
          <li>
            <Link to="/discography/you_never_walk_alone">
              you never walk alone
            </Link>
          </li>
          <li>
            <Link to="/discography/wings">wings</Link>
          </li>
          <li>
            <Link to="/discography/hyyh_young_forever">
              화양연화 young forever
            </Link>
          </li>
          <li>
            <Link to="/discography/hyyh_pt2">화양연화 pt.2</Link>
          </li>
          <li>
            <Link to="/discography/hyyh_pt1">화양연화 pt.1</Link>
          </li>
          <li>
            <Link to="/discography/dark_and_wild">dark and wild</Link>
          </li>
          <li>
            <Link to="/discography/skool_luv_affair">skool luv affair</Link>
          </li>
          <li>
            <Link to="/discography/orul82">o ru l8 2</Link>
          </li>
          <li>
            <Link to="/discography/2cool4skool">2cool4skool</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Discography;
