import styles from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* 헤더 카드(선택) */}
      <section className={`section-card ${styles.headerCard}`}>
        <h1>React Micro Projects</h1>
        <p>
          만들며 숙달하는 React 기술 — 작은 프로젝트로 React의 주요 기술을
          손으로 익히는 실습의 흔적
        </p>

        <div className={styles.meta}>
          <div className={styles.badgeWrap}>
            <span className="badge badge--neutral">Learning</span>
            <span className="badge badge--neutral">JavaScript</span>
            <span className="badge badge--neutral">React.js</span>
          </div>
          <Link href="/micro-projects" className={`btn-link ${styles.linkBtn}`}>
            View Projects →
          </Link>
        </div>
      </section>

      {/* README 스타일 본문 */}
      <article className={`section-card ${styles.prologue}`}>
        <div className="section-card__sec">
          <h2>Prologue</h2>
          <p>
            10년 전, 내일배움카드로 HTML/CSS를 배우고 혼자 반응형 포트폴리오를
            만들어 어렵게 첫 취업을 했습니다.
          </p>
          <p>
            그때는 피그마도 없어서 포토샵으로 폰트 크기, 컬러, 패딩·마진을 직접
            픽셀 단위로 재며 퍼블리싱을 했습니다.
          </p>
          <p>시작은 막막했습니다.</p>
          <p>
            간단한 네비게이션 마크업도 서툴러 다른 사이트 코드를 보며 따라 쳤고,
            화면 하나에도 시간이 오래 걸려 야근이 일상이었습니다.
          </p>
          <p> “조금만 더 준비하고 취업할 걸…” 하는 후회도 있었습니다.</p>
          <p>
            그런데 시간이 지나 수많은 화면을 반복해 만들다 보니, 그 자체가
            훈련이 되었고, 신입 때 야근하며 붙잡던 작업들이 이제는 몇 시간이면
            끝나게 됐습니다.
          </p>
          <p>이제 프론트엔드 개발로 전향하려 합니다.</p>
          <p>
            React에서는 아직 초입에 있지만,
            <strong> 반복 가능한 미니 프로젝트</strong>를 꾸준히 만들며 손으로
            익히고 몸으로 익히려 합니다.
          </p>
          <p>
            처음부터 모든 코드를 스스로 완성하긴 어렵겠지만, 저는 압니다.{" "}
            <strong>반복하면 성장한다</strong>는 것을 — 10년 전, 이미
            경험했습니다.
          </p>
          <p>
            그래서 지금 여기서부터 다시 시작합니다. <br /> 감사합니다.
          </p>
          {/* <p>
          <code>frontend-lab-micro</code>는 제가 React 실력을 향상시키기 위해
          만든 개인 연습 공간이며, 학습과 실습 결과물을 정리해둔
          레포지토리입니다.
        </p>
        <blockquote>
          단순히 완성된 결과물을 보여주는 것이 아니라, 직접 구현 과정을 통해
          리액트 기술 전반을 학습하고 숙달하는 것을 목표로 합니다.
        </blockquote> */}
        </div>
      </article>

      <article className={`section-card ${styles.tech}`}>
        <div className="section-card__sec">
          <h2>Tech Stack & Configuration</h2>
          <ul>
            <li>
              <strong>Framework</strong>: Next.js 16 — App Router
            </li>
            <li>
              <strong>Styling</strong>: SCSS Modules
            </li>
            <li>
              <strong>Design</strong>: Dark & Light themes, 반응형 대응
            </li>
          </ul>
        </div>
      </article>
      <article className={`section-card ${styles.goals}`}>
        <div className="section-card__sec">
          <h2>Learning Goals</h2>
          <ol>
            <li>핵심 훅 숙련 (useState/useEffect/useMemo/useCallback)</li>
            <li>상태관리 & 패턴 (Context / Redux / HOC)</li>
            <li>구조적 설계와 렌더링 최적화</li>
          </ol>

          {/* <h3>Get Started</h3>
          <pre>
            <code>npm install npm run dev http://localhost:3000</code>
          </pre> */}

          <p className={styles.muted}>
            © Sanghwan An — <a href="https://github.com/ansanghwan">GitHub</a>
          </p>
        </div>
      </article>
    </main>
  );
}
