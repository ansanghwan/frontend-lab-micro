# Todo App (Component Version)

### 개요

Todo 기본 버전을 기능별로 컴포넌트화한 구조.
입력, 리스트, 아이템 렌더링을 분리하여 가독성과 유지보수성을 높임.
localStorage, 필터 기능, 접근성 요소는 기본 버전과 동일하게 유지.

### 컴포넌트 구조

```
lab-todo-components/
 |_ TodoApp.jsx # 전체 상태 관리 (todos, filter, input)
 |_ TodoForm.jsx # 입력 폼 및 추가 버튼
 |_ TodoList.jsx # 필터링된 목록 출력
 |_ TodoItem.jsx # 개별 항목 렌더링 및 이벤트 처리
 |_ TodoApp.module.scss # 스타일 모듈
```

### 주요 기능

- 입력 후 Enter 또는 버튼 클릭 시 할 일 추가
- 공백 입력 방지
- 완료/미완료 토글
- 항목 삭제
- 필터(전체 / 미완료 / 완료) 기능
- localStorage 데이터 유지
- 접근성 고려(aria-label, label 등)

### 개선 포인트 (Basic → Components)

| 항목      | Basic 버전                | Component 버전                            |
| --------- | ------------------------- | ----------------------------------------- |
| 파일 구조 | 단일 파일 (`TodoApp.jsx`) | 역할별 분리 (Form, List, Item)            |
| 상태 관리 | 모든 로직이 한 곳         | 부모에서 상태 전달 (props 기반)           |
| 재사용성  | 제한적                    | 다른 프로젝트에 일부 컴포넌트 재활용 가능 |
| 유지보수  | 어려움                    | 구조적으로 수정이 용이                    |

### 향후 계획

- 완료 항목 일괄 삭제 기능
- Todo 항목 수정 기능
- 애니메이션 (GSAP / Framer Motion) 추가
- Todo 리스트 Context API 적용 테스트
