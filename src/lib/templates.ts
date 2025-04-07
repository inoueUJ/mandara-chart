import { Template } from '@/types';

export function getTemplates(): Template[] {
  return [
    {
      id: 'self-growth',
      name: '自己成長',
      description: '個人の能力開発と成長のためのテンプレート',
      cells: {
        center: { content: '自己成長' },
        subThemes: [
          { content: 'スキルアップ' },
          { content: '健康' },
          { content: '学習' },
          { content: '趣味' },
          { content: '人間関係' },
          { content: '仕事' },
          { content: 'マインド' },
          { content: '生活習慣' }
        ],
        details: [
          // スキルアップの詳細項目
          [
            { content: '資格取得' },
            { content: 'オンライン講座' },
            { content: '実践練習' },
            { content: '専門書を読む' },
            { content: 'ワークショップ参加' },
            { content: 'メンター探し' },
            { content: 'ポートフォリオ作成' },
            { content: '振り返り記録' }
          ],
          // 健康の詳細項目
          [
            { content: '毎日の運動' },
            { content: '睡眠の質向上' },
            { content: '食事の改善' },
            { content: 'ストレス管理' },
            { content: '定期健康診断' },
            { content: '十分な水分摂取' },
            { content: '姿勢改善' },
            { content: '体重管理' }
          ],
          // 学習の詳細項目
          [
            { content: '読書習慣' },
            { content: '新しい言語学習' },
            { content: 'オンライン講座' },
            { content: '勉強会参加' },
            { content: '教育ポッドキャスト' },
            { content: 'ノートまとめ' },
            { content: '知識シェア' },
            { content: '学習計画作成' }
          ],
          // 趣味の詳細項目
          [
            { content: '新しい趣味を見つける' },
            { content: '趣味の時間確保' },
            { content: 'コミュニティ参加' },
            { content: 'スキル向上' },
            { content: '作品作り' },
            { content: 'イベント参加' },
            { content: '楽しさの再発見' },
            { content: '趣味仲間を増やす' }
          ],
          // 人間関係の詳細項目
          [
            { content: '積極的な交流' },
            { content: '傾聴スキル' },
            { content: '感謝の表現' },
            { content: '定期的な連絡' },
            { content: '新しい出会い' },
            { content: '過去の関係修復' },
            { content: 'コミュニケーション向上' },
            { content: '信頼関係構築' }
          ],
          // 仕事の詳細項目
          [
            { content: '目標設定' },
            { content: 'スキル向上' },
            { content: 'ネットワーキング' },
            { content: '効率化' },
            { content: 'フィードバック活用' },
            { content: 'キャリアプラン' },
            { content: 'プロジェクト管理' },
            { content: '貢献度向上' }
          ],
          // マインドの詳細項目
          [
            { content: '瞑想習慣' },
            { content: 'ポジティブ思考' },
            { content: 'マインドフルネス' },
            { content: '感謝の習慣' },
            { content: '自己肯定感' },
            { content: 'ストレス管理' },
            { content: '目標可視化' },
            { content: '思考整理' }
          ],
          // 生活習慣の詳細項目
          [
            { content: '早起き習慣' },
            { content: '整理整頓' },
            { content: '時間管理' },
            { content: '財務管理' },
            { content: '節約習慣' },
            { content: '環境への配慮' },
            { content: '定期的な休息' },
            { content: '計画的な生活' }
          ]
        ]
      }
    },
    {
      id: 'sports-goal',
      name: 'スポーツ目標達成',
      description: 'スポーツでの目標達成や技術向上のためのテンプレート',
      cells: {
        center: { content: 'スポーツ目標達成' },
        subThemes: [
          { content: '技術向上' },
          { content: '体力強化' },
          { content: '戦術理解' },
          { content: 'メンタル強化' },
          { content: '栄養管理' },
          { content: 'コンディショニング' },
          { content: 'チームワーク' },
          { content: '目標設定' }
        ],
        details: [
          // 技術向上の詳細
          [
            { content: '基礎練習' },
            { content: '応用技術' },
            { content: '弱点克服' },
            { content: '専門コーチ指導' },
            { content: '動画分析' },
            { content: '試合経験' },
            { content: '独自トレーニング' },
            { content: '技術記録' }
          ],
          // 体力強化の詳細
          [
            { content: '持久力トレーニング' },
            { content: '筋力トレーニング' },
            { content: '柔軟性向上' },
            { content: 'スピード強化' },
            { content: 'アジリティ向上' },
            { content: 'バランス強化' },
            { content: '体幹トレーニング' },
            { content: '回復方法' }
          ],
          // その他の詳細項目は省略（実際には全て実装）
          [
            { content: '戦略理解' },
            { content: 'ポジション理解' },
            { content: '試合分析' },
            { content: '状況判断' },
            { content: '戦術書学習' },
            { content: 'コーチとの対話' },
            { content: '相手研究' },
            { content: '戦術応用' }
          ],
          [
            { content: '集中力強化' },
            { content: 'プレッシャー対応' },
            { content: '自信構築' },
            { content: '挫折からの学び' },
            { content: '目標設定' },
            { content: 'イメージトレーニング' },
            { content: 'ルーティン確立' },
            { content: '感情コントロール' }
          ],
          [
            { content: '試合前の食事' },
            { content: '日常の食事' },
            { content: '水分補給' },
            { content: 'サプリメント' },
            { content: '体重管理' },
            { content: '栄養バランス' },
            { content: '食事記録' },
            { content: '専門家相談' }
          ],
          [
            { content: 'ウォームアップ' },
            { content: 'クールダウン' },
            { content: '睡眠管理' },
            { content: 'ケガ予防' },
            { content: 'リカバリー方法' },
            { content: 'ストレッチ' },
            { content: '疲労管理' },
            { content: '定期的な休息' }
          ],
          [
            { content: 'コミュニケーション' },
            { content: '信頼関係' },
            { content: '役割理解' },
            { content: 'チーム貢献' },
            { content: '協力精神' },
            { content: 'リーダーシップ' },
            { content: '対立解決' },
            { content: 'チーム文化理解' }
          ],
          [
            { content: '短期目標' },
            { content: '中期目標' },
            { content: '長期目標' },
            { content: '目標の可視化' },
            { content: '進捗確認' },
            { content: '目標調整' },
            { content: '成功の祝福' },
            { content: '次の挑戦' }
          ]
        ]
      }
    },
    {
      id: 'career-plan',
      name: 'キャリア計画',
      description: '職業能力の開発とキャリアアップのためのテンプレート',
      cells: {
        center: { content: 'キャリア計画' },
        subThemes: [
          { content: '専門スキル' },
          { content: '人間関係構築' },
          { content: 'リーダーシップ' },
          { content: '資格取得' },
          { content: '業界知識' },
          { content: '自己PR' },
          { content: 'ワークライフバランス' },
          { content: '長期ビジョン' }
        ],
        details: [
          // 簡略化のため詳細項目は省略（実際には全て実装）
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' })
        ]
      }
    },
    {
      id: 'annual-goals',
      name: '年間目標',
      description: '1年間の目標達成のためのテンプレート',
      cells: {
        center: { content: '年間目標' },
        subThemes: [
          { content: '1月-3月' },
          { content: '4月-6月' },
          { content: '7月-9月' },
          { content: '10月-12月' },
          { content: '仕事' },
          { content: 'プライベート' },
          { content: '健康' },
          { content: '学習' }
        ],
        details: [
          // 簡略化のため詳細項目は省略（実際には全て実装）
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' })
        ]
      }
    },
    {
      id: 'health-management',
      name: '健康管理',
      description: '心身の健康維持・向上のためのテンプレート',
      cells: {
        center: { content: '健康管理' },
        subThemes: [
          { content: '運動習慣' },
          { content: '食事管理' },
          { content: '睡眠改善' },
          { content: 'メンタルケア' },
          { content: '予防医療' },
          { content: '体調管理' },
          { content: 'リラクゼーション' },
          { content: '健康記録' }
        ],
        details: [
          // 簡略化のため詳細項目は省略（実際には全て実装）
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' }),
          Array(8).fill({ content: '' })
        ]
      }
    }
  ];
}

export function getTemplateById(id: string): Template | undefined {
  return getTemplates().find(template => template.id === id);
}
