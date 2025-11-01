# Todo App (Component Version)

### 개요

React 학습용으로 만든 기본 Todo List 앱.
단일 컴포넌트 구조로 `useState`, `useEffect`, 이벤트 처리의 기초를 익히는 데 초점을 맞춤.
다음 단계로 컴포넌트 분리 및 구조화(Components 버전) 예정.

### 주요 기능

- 입력 후 Enter 또는 “추가” 버튼 클릭 시 새 항목 추가
- 공백 입력 방지
- 완료/미완료 토글 (체크박스)
- 항목 삭제
- 필터 버튼(전체 / 미완료 / 완료)
- localStorage 데이터 저장 및 유지
- 폼과 버튼 접근성 라벨 적용 (`aria-label`, `label`)
- 기본 SCSS 모듈 기반 스타일 적용

### 컴포넌트 구조

```
lab-todo-basic/
 |_ TodoApp.jsx
 |_ TodoApp.module.scss
```

### 다음 단계

- 컴포넌트 구조 분리 (`TodoForm`, `TodoList`, `TodoItem`)
- props를 통한 데이터 전달 학습
- 구조적 리팩토링 및 재사용성 강화
- 향후 Dark Mode, 수정 기능, 전체 삭제 기능 추가 예정
