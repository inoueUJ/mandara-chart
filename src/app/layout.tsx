import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "マンダラチャート作成アプリ",
  description: "目標達成のためのマンダラチャートをブラウザで簡単に作成・管理できるアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" className="font-bold text-blue-600 text-xl">マンダラチャート</a>
            <ul className="flex gap-4">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-600 transition-colors">
                  使い方
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
