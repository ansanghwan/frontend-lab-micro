import TodoApp from "../lab-todo-basic/TodoApp";

// ✅ 요구사항 컴포넌트
export function TodoRequirements() {
  return (
    <ul>
      <li>입력 후 Enter 또는 “추가” 버튼 클릭 시 새 항목이 추가</li>
      <li>공백 또는 빈 문자열은 추가되지 않게 적용</li>
      <li>체크박스 클릭 시 완료/미완료 상태가 즉시 반영</li>
      <li>삭제 버튼 클릭 시 해당 항목이 목록에서 제거</li>
      <li>필터 버튼(전체/미완료/완료)에 따라 목록이 변경</li>
      <li>새로고침 후에도 기존 목록이 유지 (localStorage 저장)</li>
      {/* <li>모바일에서도 터치 영역이 충분하고, 레이아웃이 유지된다</li> */}
      <li>완료된 항목은 취소선 및 회색 톤으로 시각적으로 구분 </li>
      <li>폼과 버튼에 접근성 라벨이 제공 (aria-label, label 등)</li>
      <li>컴포넌트가 기능별로 분리 예정</li>
      {/* ✅ 나중에 커스텀 요소 추가 가능 */}
      <hr />
      <p className="muted">
        💡 추가 메모: 필터 기능은 ToggleButtonGroup 컴포넌트로 분리 예정
      </p>
    </ul>
  );
}

// ✅ 레지스트리 등록
export const todoProject = {
  component: TodoApp,
  requirements: <TodoRequirements />,
};
