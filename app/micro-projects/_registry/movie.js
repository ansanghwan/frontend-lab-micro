import movieAppBasic from "../lab-movie-basic/MovieApp";
import movieAppBasicComponents from "../lab-movie-components/MovieApp";

export const movieProject = {
  component: movieAppBasic,
  requirements: (
    <>
      <ul>
        <li>영화 제목 입력 후 Enter/“검색”으로 TMDB 검색 요청</li>
        <li>요청 중에는 버튼 비활성화 및 “검색 중...” 표시</li>
        <li>결과 없거나 오류 시 사용자 메시지 표시</li>
        <li>
          초기 상태에는 “검색어를 입력해 영화를 찾아보세요.” 안내 문구 표시
        </li>
        <li>
          결과는 카드 리스트로 렌더링 (포스터, 제목, 개봉 연도, 평점, 개요)
        </li>
        <li>포스터 미존재 시 대체 UI 표시</li>
        <li>이미지 lazy loading 적용 (img loading="lazy")</li>
      </ul>
    </>
  ),
};

export const movieComponentsProject = {
  component: movieAppBasicComponents,
  requirements: (
    <>
      <ul>
        <li>Form, List, Card 세 개의 컴포넌트로 분리</li>
        <li>부모(MovieApp)에서 props로 상태와 핸들러 전달</li>
        <li>API 호출 및 로딩, 오류 상태 관리</li>
        <li>조건부 렌더링으로 로딩/에러/빈 상태 처리</li>
        <li>TMDB API를 통한 영화 검색 결과 표시</li>
      </ul>

      <h2>Memo</h2>
      <div>
        <p>
          이제는 컴포넌트 분리 연습을 거듭하면서 점점 자연스럽게 익숙해지고
          있음을 느낍니다.
        </p>
      </div>
    </>
  ),
};
