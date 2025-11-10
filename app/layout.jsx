import "./globals.scss";
import Header from "../components/Header/Header";
import ThemeInitializer from "./ThemeInitializer";

export const metadata = {
  title: "React Micro Projects | Sanghwan An",
  description: "미니 프로젝트로 React를 만들며 익히는 실습 레포지토리",
  openGraph: {
    title: "React Micro Projects | Sanghwan An",
    description: "React로 직접 만들어보며 성장하는 프론트엔드 미니 프로젝트",
    url: "https://sanghwan-mini-project.netlify.app/",
    siteName: "Sanghwan Frontend Lab",
    images: [
      {
        url: "/ansanghwan_character.png",
        alt: "Sanghwan Frontend Lab Open Graph Image",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ThemeInitializer />
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
