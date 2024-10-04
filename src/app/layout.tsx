import type { Metadata } from "next";
import "./styles/index.scss";

export const metadata: Metadata = {
  title: "Фильмы, сериалы и мультфильмы",
  description: "Лучший онлайн кинотеатр",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
