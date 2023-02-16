import React from "react";
import "../style/about.css";

const About = () => {
  return (
    <div>
      <div className="group">
        <div className="titlefont">
          <h1>ABOUT BTS</h1>
          </div>
        <br/>
        <div className="about">
          <div className="aboutpic">
          <img src="/images/bts_ptd.jpg" alt="bts"/>
          </div>
          <div className="aboutbts">
          <div className="contentfont">
            <div className="text1">
          2013년 데뷔해 국내외 신인상을 휩쓴 방탄소년단은 명실상부 한국을
          대표하는 최정상 보이 그룹으로 성장했다.전 세계적으로 방탄소년단
          열풍을 일으키며 ‘21세기 팝 아이콘’으로 불린다. <br/>미국 빌보드, 영국
          오피셜 차트, 일본 오리콘을 비롯해 아이튠즈, 스포티파이, 애플뮤직 등
          세계 유수의 차트 정상에 올랐고, 음반 판매량과 뮤직비디오 조회수, SNS
          지수 등에서도 독보적인 기록을 써 내려가고 있다. 특히, 방탄소년단은 한
          주에 빌보드 ‘핫 100’ 차트와 ‘빌보드 200’ 차트 정상을 동시 정복한
          최초의 그룹이며, 통산 ‘빌보드 200’ 5차례, ‘핫 100’ 4차례 1위를
          차지했다. <br/>또한, ‘제63회 그래미 어워드’에서 한국 가수 최초로 단독
          무대를 펼쳐 ‘빌보드 뮤직 어워드’와 ‘아메리칸 뮤직 어워드’, ‘그래미
          어워드’까지 미국 3대 음악 시상식 무대에서 공연하는 기록을 세웠다.
          방탄소년단은 스타디움 투어를 개최하며 전 세계 콘서트 시장에서도 글로벌
          아티스트로서의 입지를 다져 왔으며, UN 연설과 LOVE MYSELF 캠페인 등을
          통해 선한 영향력을 실천하고 있다.
            </div>
            </div>
        </div>
        </div>
      </div>
      <div className="group">
        <div className="titlefont">
          <h1>MEMBER</h1>
        </div>
        <div className="member">
        <ul className="contentfont">
          <li>
            <div className="memberlist">
              <img src="https://ibighit.com/bts/images/profile/proof/member/member-rm.jpg" alt="rm.jpg"/>
          <div>
            리더/메인래퍼/1994.09.12
            </div>
              </div>
            </li>
          <li>JIN 보컬/1992.12.04</li>
          <li>SUGA 래퍼/1993.03.09</li>
          <li>JHOPE 래퍼/메인댄서/1994.02.18</li>
          <li>JIMIN 보컬/1995.10.13</li>
          <li>V 보컬/1995.12.30</li>
          <li>JK 보컬/메인보컬/1997.09.01</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
