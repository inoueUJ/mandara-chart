import { Suspense } from 'react';
import MandalaEditorWrapper from '@/components/MandalaChart/MandalaEditorWrapper';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">マンダラチャート</h1>
        <p className="text-gray-600">
          目標達成のための計画立てに役立つマンダラチャートを作成しましょう
        </p>
      </header>
      
      <Suspense fallback={<div>読み込み中...</div>}>
        <MandalaEditorWrapper />
      </Suspense>
      
      <section className="mt-12 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">マンダラチャートとは？</h2>
        <p className="mb-4">
          マンダラチャートは9×9のマス目で構成された目標達成のためのフレームワークです。
          中央に主要な目標を置き、その周囲に8つのサブテーマを配置することで、
          全体像を俯瞰しながら細部まで計画を立てることができます。
        </p>
        <p className="mb-4">
          プロ野球選手の大谷翔平選手も高校時代に使用していたことで知られており、
          目標を視覚化し、具体的な行動計画に落とし込むのに非常に効果的なツールです。
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-bold mb-2">マンダラチャートの使い方</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>中央のマスに最も重要な目標を書きます</li>
            <li>周囲8つのマスに、その目標を達成するためのサブテーマを書きます</li>
            <li>各サブテーマを中心とした9マスに、さらに具体的な行動計画を書きます</li>
            <li>完成したマンダラチャートを定期的に見返し、進捗を確認します</li>
          </ol>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm py-4">
        <p>© 2025 マンダラチャートアプリ</p>
      </footer>
    </main>
  );
}
