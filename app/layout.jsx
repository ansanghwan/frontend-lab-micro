import "./globals.scss";
import Header from "../components/Header/Header";
import ThemeInitializer from "./ThemeInitializer";

export const metadata = {
  title: "React Micro Projects | Sanghwan An",
  description: "작은 프로젝트로 React를 만들며 익히는 실습 레포지토리",
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
