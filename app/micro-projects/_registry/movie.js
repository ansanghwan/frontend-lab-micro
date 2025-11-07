import movieAppBasic from "../lab-movie-basic/MovieApp";
// ✅ Components 버전
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
