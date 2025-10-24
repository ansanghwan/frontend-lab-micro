import "./globals.scss";
import Header from "../components/Header/Header";
import ThemeInitializer from "./ThemeInitializer";

export const metadata = {
  title: "Frontend Lab",
  description: "Sanghwan Portfolio",
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
