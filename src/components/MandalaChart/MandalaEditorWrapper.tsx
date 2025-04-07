'use client';

import React from 'react';
import MandalaEditor from './MandalaEditor';

export default function MandalaEditorWrapper() {
  return (
    <div className="mb-8">
      <MandalaEditor />
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
        <h3 className="font-bold mb-2">使い方</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>中央のセルに主要目標を入力してください</li>
          <li>周囲8つのセルにサブテーマを入力します</li>
          <li>各サブテーマの周囲8つのセルに詳細な計画や行動を入力します</li>
          <li>セルをクリックすると編集できます</li>
          <li>作成したチャートは自動的に保存されます</li>
          <li>「画像として保存」ボタンでチャートを画像として保存できます</li>
        </ul>
      </div>
    </div>
  );
}
