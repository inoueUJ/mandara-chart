import { MandalaChart } from '@/types';

const STORAGE_KEY = 'mandala-chart-data';

export function saveChart(chart: MandalaChart): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chart));
  } catch (error) {
    console.error('チャートの保存に失敗しました:', error);
  }
}

export function loadChart(): MandalaChart | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) as MandalaChart : null;
  } catch (error) {
    console.error('チャートの読み込みに失敗しました:', error);
    return null;
  }
}

// 初期値・空のチャートを作成する関数
export function createEmptyChart(name: string = 'マイチャート'): MandalaChart {
  const now = Date.now();
  
  return {
    id: `chart-${now}`,
    name,
    createdAt: now,
    updatedAt: now,
    cells: {
      center: {
        id: 'center',
        content: '',
      },
      subThemes: Array(8).fill(null).map((_, i) => ({
        id: `sub-${i}`,
        content: '',
      })),
      details: Array(8).fill(null).map((_, i) => 
        Array(8).fill(null).map((_, j) => ({
          id: `detail-${i}-${j}`,
          content: '',
        }))
      )
    }
  };
}

// 複数チャート管理（将来機能）
export function getAllCharts(): MandalaChart[] {
  // 将来的な拡張のための基盤
  return [];
}
