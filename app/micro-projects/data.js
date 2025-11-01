export const projects = [
  {
    slug: "todo",
    name: "Todo App",
    description: "로컬 스토리지 기반의 간단한 투두 — 추가/토글/삭제/필터",
    tags: ["React", "useState", "localStorage"],
    links: {
      repo: "https://github.com/ansanghwan/frontend-lab-micro",
      live: "/micro-projects/todo", // 내부 라우팅이면 상대 경로
    },
    tech: ["React", "Next.js (App Router)", "SCSS Modules"],
    features: [
      "할 일 추가 / 완료 토글 / 삭제",
      "필터(전체/진행중/완료)",
      "로컬 스토리지 영속화",
    ],
    learnings: [
      "커스텀 훅으로 CRUD+영속 로직 분리",
      "폰트 스케일(remx)과 레이아웃(rem) 분리로 가독성/안정성 확보",
      "다크/라이트 토큰만 교체해 테마 일관성 유지",
    ],
    nextSteps: [
      "인라인 수정(더블클릭 편집)",
      "정렬 옵션(최신/오래된)",
      "배치 작업(완료 모두 지우기)",
    ],
    shots: [
      // public 경로 기준
      "/images/todo-1.png",
      "/images/todo-2.png",
    ],
    period: "2025.10",
    version: "v1",
  },
  // ...다른 프로젝트들
];
