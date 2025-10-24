# React Micro Projects Portfolio

## Introduction

`frontend-lab-micro`는 제가 **React 실력을 향상시키기 위해 만든 개인 연습 공간이며, 학습과 실습 결과물을 정리해둔 레포지토리**입니다.

> 단순히 완성된 결과물을 보여주는 것이 아니라, 직접 구현 과정을 통해 리액트 기술 전반을 학습하고 숙달하는 것을 목표로 합니다.

## Tech Stack & Configuration

> ⚙️ **의도:**
> 협업 시 구조를 빠르게 파악하고, 누구나 손쉽게 유지보수할 수 있도록 단순한 설정을 지향했습니다. 이러한 목적에 부합한다고 판단해 아래와 같이 세팅했습니다.

| 항목                  | 내용                                                    |
| --------------------- | ------------------------------------------------------- |
| **Framework**         | Next.js 16 — App Router(서버 컴포넌트·파일 기반 라우팅) |
| **Language**          | JavaScript (TypeScript planned)                         |
| **Styling**           | SCSS Modules (`.module.scss`)                           |
| **Design Philosophy** | 컴포넌트 단위 스타일 관리 + 부모 레벨 제어 가능         |
| **SCSS Structure**    | `functions`, `mixins`, `tokens`로 재사용성 확보         |
| **CSS 변수 정책**     | Sass 변수 대신 `:root` 변수를 사용하여 단순화           |

## Project Structure

```
frontend-lab-micro/
 | app/
 | |- micro-projects/
 | | |- [slug]/              # 동적 라우팅용 폴더
 | | |- lab-todo/            # 실험 1: Todo App
 | | |_ data.js              # 프로젝트 메타데이터
 | |- favicon.ico
 | |- globals.scss
 | |- layout.jsx
 | |- page.jsx
 | |_ ThemeInitializer.jsx
 |- assets/
 | |_ styles/
 |   |- functions/
 |   |- mixins/
 |   |- tokens/
 |   |_ _index.scss
 |- components/
 | |- Header/
 | |- Nav/
 | |_ ThemeToggle.jsx
 |- public/
 |- eslint.config.mjs
 |- next.config.ts
 |- package.json
 |- postcss.config.mjs
 |_ README.md
```

<!-- ## ⚗️ Micro Projects

| 실험 이름           | 폴더                  | 주요 학습 포인트                         |
| ------------------- | --------------------- | ---------------------------------------- |
| **Todo App**        | `lab-todo`            | useState, props, 컴포넌트 구조 기본      |
| **Scroll Observer** | `lab-scroll` _(예정)_ | useEffect, useRef, Intersection Observer |
| **Theme Switcher**  | `lab-theme` _(예정)_  | Context API, custom hook (useTheme)      |
| **Redux Lab**       | `lab-redux` _(예정)_  | Redux store, action, reducer 패턴        |
| **Child Handle**    | `lab-child` _(예정)_  | useRef, useImperativeHandle              |
| **HOC Wrapper**     | `lab-hoc` _(예정)_    | 고차컴포넌트 패턴 실습                   |
| **Form Lab**        | `lab-form` _(예정)_   | useReducer, form validation 로직         |

> 🚧 _앞으로 추가될 micro projects들은 React 훅, 성능 최적화, 상태관리 패턴 등을 중심으로 확장될 예정입니다._

--- -->

## Learning Goals

- React의 **핵심 훅(useState, useEffect, useMemo, useCallback 등)** 숙련
- **고차컴포넌트(HOC)**, **Context API**, **Redux / Zustand** 등의 고급 패턴 실습
- **컴포넌트 재사용성**, **상태 분리**, **렌더링 최적화**를 체득
- 실무 프로젝트에 바로 적용 가능한 **구조적 설계 감각** 습득

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## License & Notes

이 레포지토리는 학습 및 포트폴리오 목적의 개인 프로젝트입니다.
코드 일부는 오픈소스를 참고하였으며,
모든 내용은 학습과 연습을 위한 용도로 작성되었습니다.

## Author

**Created by Sanghwan An**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue)](https://sanghwan-portfolio.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-informational)](https://www.linkedin.com/in/vooo10/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-lightgrey)](https://github.com/ansanghwan)

---

🚀 _“코드를 통해 배우고, 배운 것을 코드로 증명하는 레포”_
**— frontend-lab-micro**
