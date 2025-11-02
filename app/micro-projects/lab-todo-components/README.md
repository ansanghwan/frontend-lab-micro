# Todo App (Component Version)

### 개요

기존 기본 Todo 버전을 기능별로 컴포넌트화한 구조.
입력(Form)과 목록(List)을 분리해 가독성과 유지보수성을 높였으며,
props를 통해 부모-자식 간 데이터 흐름을 명확히 구성함.
localStorage, 필터 기능, 접근성 요소는 기본 버전과 동일하게 유지됨.

### 컴포넌트 구조

```
lab-todo-components/
 |_ TodoApp.jsx # 전체 상태 관리 (todos, filter, input)
 |_ TodoForm.jsx # 입력 폼 (input + button)
 |_ TodoList.jsx # 목록 출력 및 항목 렌더링 (li 포함)
 |_ TodoApp.module.scss # 스타일 모듈
 |_ README.md
```

### 주요 기능

- 입력 후 Enter 또는 “추가” 버튼 클릭 시 새 항목 추가
- 공백 입력 방지
- 완료/미완료 상태 토글 (체크박스)
- 항목 삭제 기능
- 필터 버튼(전체 / 미완료 / 완료)
- localStorage 데이터 저장 및 유지
- 접근성 고려 (`aria-label`, `label` 등)
- **리스트가 비었을 때 안내 문구 표시 (`styles.none`)**
- **SCSS 모듈 기반 스타일 적용 (TodoApp.module.scss)**

### 개선 포인트 (Basic → Components)

| 항목        | Basic 버전                | Component 버전                            |
| ----------- | ------------------------- | ----------------------------------------- |
| 파일 구조   | 단일 파일 (`TodoApp.jsx`) | 역할별 분리 (Form, List)                  |
| 상태 관리   | 한 파일 내 집중           | 부모(`TodoApp`) 중심, 자식은 props로 제어 |
| UI 책임     | 한 컴포넌트가 모든 역할   | UI 담당 컴포넌트로 분리                   |
| 재사용성    | 제한적                    | 일부 컴포넌트 재활용 가능                 |
| 스타일 관리 | 단일 모듈                 | 공용 모듈 재활용 (TodoApp.module.scss)    |

### 향후 계획

- Todo 항목 수정 기능 추가
- 전체 항목 일괄 삭제 기능
- 완료 상태 애니메이션 (Framer Motion / GSAP)
- Context API로 전역 상태 관리 실험
- 다크모드 대응 (CSS 변수 기반 토큰화)

### 💡 학습 포인트

| 주제           | 설명                                                           |
| -------------- | -------------------------------------------------------------- |
| props 구조분해 | `function TodoList({ todos, onToggle, onDelete })` 형태로 이해 |
| 함수 전달 흐름 | 부모 → 자식으로 전달된 함수가 이벤트에서 호출됨                |
| useEffect      | localStorage 동기화 로직                                       |

### 결과 미리보기

- `/micro-projects/todo-components` URL로 접근 시 실행
- 기본 기능 + 컴포넌트 분리형 구조 + 스타일 적용 완료
- “예정된 일이 없습니다.” 메시지 포함 ✅
