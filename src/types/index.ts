export interface MandalaCell {
  id: string;
  content: string;
  color?: string;
  bold?: boolean;
}

export interface MandalaChart {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  cells: {
    center: MandalaCell;              // 中央のセル
    subThemes: MandalaCell[];         // 周囲8つのサブテーマ
    details: MandalaCell[][];         // 各サブテーマの詳細8つずつ
  };
}

export interface Template {
  id: string;
  name: string;
  description: string;
  cells: {
    center: { content: string };
    subThemes: { content: string }[];
    details: { content: string }[][];
  };
}
