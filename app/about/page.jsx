import styles from "./About.module.scss";

export default function about() {
  return (
    <div className={styles.aboutWrap}>
      <h1>Aligned Design. Balanced Code.</h1>
      <div className={styles.about}>
        <div className={styles.sideBar}>
          <section className={`section-card ${styles.sideBarCard}`}>
            <div className={styles.profile}>
              <div className={styles.profileLeft}>
                <span className={styles.picture}>
                  <img src="/images/ash.jpg" alt="안상환" />
                </span>
              </div>
              <div className={styles.profileRight}>
                <p className={styles.role}>Web UI Developer</p>
                <div className={styles.name}>
                  <p className={styles.hanjaIitem}>
                    <span className={styles.hanja}>安</span>
                    <span className={styles.hanjaDesc}>편안 안</span>
                  </p>
                  <p className={styles.hanjaIitem}>
                    <span className={styles.hanja}>相</span>
                    <span className={styles.hanjaDesc}>서로 상</span>
                  </p>

                  <p className={styles.hanjaIitem}>
                    <span className={styles.hanja}>紈</span>
                    <span className={styles.hanjaDesc}> 흰 비단 환</span>
                  </p>
                </div>
              </div>
              <p className={styles.quote}>
                “편안함 속에서 서로를 돕고 밝게 비추는 깨끗한 비단 같은 사람”
              </p>
            </div>
          </section>
        </div>

        <div className={styles.aboutCont}>
          <section className="section-card">
            <div className={styles.selfIntro}>
              <h2>About Me</h2>
              <p>
                저는 편안함(安), 조화(相), 섬세한 완성도(紈)를 웹 UI에 구현하는
                개발자입니다.
              </p>

              <p>
                복잡함보다 직관적인 마크업을 지향하며, 누구나 쉽게 이해하고
                유지보수할 수 있는 UI 구조를 중요하게 생각합니다.
              </p>

              <p>
                다른 사람이 보아도 바로 파악할 수 있는 코드를 목표로 하며,
                불필요한 복잡성을 줄이는 방향으로 구현합니다. 또한 {""}
                <strong className={styles.highlight}>
                  디자인 시안과의 싱크로율을 높이고 유지보수가 쉬운 직관적인
                  마크업·UI 패턴을 만드는 것
                </strong>
                을 중요하게 생각합니다.
              </p>
            </div>

            <div className={styles.selfIntro}>
              <h2>Experience</h2>
              <p>
                지난 10년간 금융·이커머스·교육·언론 등 다양한 도메인의 웹
                프로젝트를 진행해왔습니다.
              </p>
              <p>
                특히
                <strong className={styles.highlight}>
                  기존 인력이 중단했거나 정리되지 않은 상태로 남아 있던 작업을
                  인수해, 해결되지 않은 이슈는 리더와 공유하고 협의를 통해
                  정리하며 최종 결과물까지 책임지고 완성하는 역할
                </strong>
                을 자주 맡아왔습니다.
              </p>
              <p>
                최근에는
                <strong className={styles.highlight}>
                  현대면세점(h.oney) 프로젝트에서 퍼블리싱 PL로 참여해 가이드
                  제작·의사결정·팀 리드 및 오픈·철수까지 전 과정을 수행
                </strong>
                했습니다.
              </p>
              <p>
                이러한 경험을 기반으로 현재는 React 중심의 프론트엔드 개발자로
                확장하고 있습니다.
              </p>
            </div>
            <div className={styles.selfIntro}>
              <h2>채용 시 얻을 수 있는 강점</h2>
              <p>
                저를 채용하시면
                <strong className={styles.highlight}>
                  10년간의 퍼블리싱 경험으로 다져진 빠르고 정확한 마크업,
                  HTML/CSS·웹접근성·반응형 설계 전문성
                </strong>
                을 즉시 활용하실 수 있습니다.
              </p>
              <p>
                또한 다양한 디바이스와 환경을 고려한
                <strong className={styles.highlight}>
                  반응형 구축 경험이 풍부해
                </strong>
                , 대부분의 웹 프로젝트에서
                <strong className={styles.highlight}>
                  퍼블리싱 관련 리소스·외주 비용을 줄이고 개발 사이클을 단축하는
                  데 기여
                </strong>
                할 수 있습니다.
              </p>
              <p className={styles.moreProject}>
                👉 더 많은 퍼블리싱 프로젝트 보기 <br />
                <a
                  href="https://sanghwan-portfolio.netlify.app/project-blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://sanghwan-portfolio.netlify.app/project-blog/
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* <section className="section-card">asdf</section>
      <section className="section-card">asdf</section>
      <section className="section-card">asdf</section> */}
    </div>
  );
}
