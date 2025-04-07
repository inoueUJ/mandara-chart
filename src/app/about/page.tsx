export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">マンダラチャートについて</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4">マンダラチャートとは？</h2>
        <p className="mb-4">
          マンダラチャートは9×9のマス目からなる目標達成や問題解決のために使われる視覚的なフレームワークです。
          中央に主要な目標やテーマを配置し、その周囲に関連する8つのサブテーマや要素を配置することで、
          全体像を俯瞰しながら細部まで整理していく方法です。
        </p>
        <p className="mb-4">
          マンダラという言葉は「円」を意味するサンスクリット語で、中心点から外側に放射状に広がる
          幾何学的なデザインやパターンを指します。マンダラチャートはその構造にインスピレーションを得ていますが、
          直接的に仏教とは関係なく、目標達成のための実用的なツールとして開発されました。
        </p>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4">大谷翔平選手とマンダラチャート</h2>
        <p className="mb-4">
          大谷翔平選手は高校時代にマンダラチャートを使って自身の目標を整理していたことで知られています。
          彼は花巻東高校の2年生の時に、卒業までに日本を代表する野球選手になるという目標を設定し、
          それを達成するためにマンダラチャートを活用しました。
        </p>
        <p className="mb-4">
          大谷選手のチャートでは、中心に「ドラフト1位で指名される」という目標を置き、
          周りに「球速を上げる」「体力をつける」「人間性を高める」などの具体的な目標を設定。
          さらにそれぞれの目標に対して、より具体的な行動計画を展開していました。
        </p>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4">マンダラチャートの効果</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>明確さと集中力</strong>：
            目標と優先順位を明確にし、達成したいことに集中できるようになります。
          </li>
          <li>
            <strong>効率とスピード</strong>：
            構造化されたフレームワークにより、より迅速かつ効率的に目標を設定できます。
          </li>
          <li>
            <strong>視覚化と動機づけ</strong>：
            目標とアクションアイテムを視覚的に見ることで、集中力を保ち、モチベーションを高めます。
          </li>
          <li>
            <strong>バランスと創造性</strong>：
            仕事関連の項目やプライベートの側面を追加でき、取り組みのバランスを取りやすくなります。
          </li>
          <li>
            <strong>内省と成長</strong>：
            自分の進捗を振り返る際に活用でき、改善が必要な分野を特定しやすくなります。
          </li>
        </ul>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4">マンダラチャートの作り方</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>中央のマスに最も重要な目標や解決したい問題を書きます</li>
          <li>周囲8つのマスに、その目標を達成するためのサブテーマを書きます</li>
          <li>各サブテーマを中心とした9マスに、さらに具体的な行動計画を書きます</li>
          <li>完成したマンダラチャートを定期的に見返し、進捗を確認します</li>
        </ol>
        <p className="mt-4">
          このアプリでは、自己成長、スポーツ目標達成、キャリア計画など、
          様々なテンプレートから選んですぐに始めることができます。
        </p>
      </section>
      
      <div className="text-center mt-8">
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          マンダラチャートを作成する
        </a>
      </div>
    </main>
  );
}
