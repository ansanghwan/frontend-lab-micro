import PasswordAppBasic from "../lab-password/PasswordApp";

export const passwordProject = {
  component: PasswordAppBasic,
  requirements: (
    <>
      <ul>
        <li>비밀번호 길이(8~32) 슬라이더로 조절 가능</li>
        <li>대문자 / 소문자 / 숫자 / 특수문자 포함 여부 선택</li>
        <li>옵션을 하나도 선택하지 않으면 에러 메시지 출력</li>
        <li>버튼 클릭 시 랜덤 비밀번호 생성</li>
        <li>생성된 비밀번호를 클릭 한 번으로 복사 가능</li>
        <li>옵션 상태에 따라 즉시 UI 반영</li>
        <li>Basic 버전 + 컴포넌트 분리 버전 모두 구현</li>
        <li>
          컴포넌트 버전은 LengthSlider / OptionsGroup / ResultDisplay로 구성
        </li>
        <li>basic/comp 각각 독립적인 state 관리 (상태 충돌 방지)</li>
        <li>Next.js 클라이언트 컴포넌트로 구현</li>
      </ul>

      <h2>Memo</h2>
      <div>
        <p>
          새로고침 버튼을 추가하면서 onClick에 함수를 즉시 실행 형태로 넣어 무한
          리렌더 이슈를 경험했습니다. 이벤트는 반드시 함수 형태로 넘겨야 한다는
          것을 다시 한 번 확실히 이해하게 되었습니다.
        </p>
        <p>
          한 페이지에서 동일한 기능의 컴포넌트를 여러 개 사용할 때 state가
          충돌하지 않도록 basic/comp 두 개의 객체로 분리해 관리했습니다. 이
          과정에서 “상태 분리의 필요성”을 배우는 중요한 경험이었습니다.
        </p>
      </div>
    </>
  ),
};
