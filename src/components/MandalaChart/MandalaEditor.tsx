'use client';

import React, { useState, useEffect } from 'react';
import MandalaCell from './MandalaCell';
import { MandalaChart } from '@/types';
import { saveChart, loadChart, createEmptyChart } from '@/lib/storage';
import ExportButton from '../Export/ExportButton';

export default function MandalaEditor() {
  const [chart, setChart] = useState<MandalaChart>(() => {
    return createEmptyChart();
  });
  
  // ローカルストレージからの読み込み（初回のみ）
  useEffect(() => {
    const savedChart = loadChart();
    if (savedChart) {
      setChart(savedChart);
    }
  }, []);
  
  // 変更時に自動保存
  useEffect(() => {
    saveChart(chart);
  }, [chart]);
  
  // テンプレートから新しいチャートを作成ウフンクション削除 */
  
  // セル内容の更新処理
  const updateCenterCell = (content: string) => {
    setChart(prev => ({
      ...prev,
      updatedAt: Date.now(),
      cells: {
        ...prev.cells,
        center: {
          ...prev.cells.center,
          content
        }
      }
    }));
  };
  
  const updateSubThemeCell = (index: number, content: string) => {
    setChart(prev => {
      const newSubThemes = [...prev.cells.subThemes];
      newSubThemes[index] = {
        ...newSubThemes[index],
        content
      };
      
      return {
        ...prev,
        updatedAt: Date.now(),
        cells: {
          ...prev.cells,
          subThemes: newSubThemes
        }
      };
    });
  };
  
  const updateDetailCell = (rowIndex: number, colIndex: number, content: string) => {
    setChart(prev => {
      const newDetails = [...prev.cells.details];
      if (!newDetails[rowIndex]) return prev;
      
      const newRow = [...newDetails[rowIndex]];
      newRow[colIndex] = {
        ...newRow[colIndex],
        content
      };
      newDetails[rowIndex] = newRow;
      
      return {
        ...prev,
        updatedAt: Date.now(),
        cells: {
          ...prev.cells,
          details: newDetails
        }
      };
    });
  };
  
  return (
    <div className="mandala-editor-container">
      {/* <div className="flex justify-end items-center mb-4">
        <ExportButton chart={chart} chartElementId="mandala-chart-grid" />
      </div> */}
      
      <div 
        id="mandala-chart-grid" 
        className="grid grid-cols-9 grid-rows-9 gap-1 p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto"
        style={{ 
          gridTemplateRows: 'repeat(9, minmax(60px, 1fr))', 
          gridTemplateColumns: 'repeat(9, minmax(60px, 1fr))',
          aspectRatio: '1/1'
        }}
      >
        {/* 中央のセル */}
        {renderCenterCell(chart, updateCenterCell)}
        
        {/* サブテーマと詳細セルのレンダリング */}
        {renderSubThemeAndDetailCells(chart, updateSubThemeCell, updateDetailCell)}
      </div>
    </div>
  );
}

// 中央セルのレンダリング
function renderCenterCell(chart: MandalaChart, updateFn: (content: string) => void) {
  return (
    <div style={{ 
      gridColumnStart: 5, 
      gridColumnEnd: 6, 
      gridRowStart: 5, 
      gridRowEnd: 6 
    }}>
      <MandalaCell 
        cell={chart.cells.center} 
        onChange={updateFn}
        isCenter={true}
      />
    </div>
  );
}

// サブテーマと詳細セルのレンダリング
function renderSubThemeAndDetailCells(
  chart: MandalaChart, 
  updateSubThemeFn: (index: number, content: string) => void,
  updateDetailFn: (rowIndex: number, colIndex: number, content: string) => void
) {
  // サブテーマの位置マッピング - 中央の3×3グリッドの外周8マス
  const subThemePositions = [
    { row: 4, col: 4 }, // 中央3×3の左上
    { row: 4, col: 5 }, // 中央3×3の上
    { row: 4, col: 6 }, // 中央3×3の右上
    { row: 5, col: 4 }, // 中央3×3の左
    { row: 5, col: 6 }, // 中央3×3の右
    { row: 6, col: 4 }, // 中央3×3の左下
    { row: 6, col: 5 }, // 中央3×3の下
    { row: 6, col: 6 }, // 中央3×3の右下
  ];
  
  // 外側の3×3グリッドの中心位置（サブテーマを複製して配置する）
  const outerCenterPositions = [
    { row: 2, col: 2 }, // 左上グリッドの中心
    { row: 2, col: 5 }, // 上中央グリッドの中心
    { row: 2, col: 8 }, // 右上グリッドの中心
    { row: 5, col: 2 }, // 左中央グリッドの中心
    { row: 5, col: 8 }, // 右中央グリッドの中心
    { row: 8, col: 2 }, // 左下グリッドの中心
    { row: 8, col: 5 }, // 下中央グリッドの中心
    { row: 8, col: 8 }, // 右下グリッドの中心
  ];
  
  // 8つのサブテーマセル（中央3×3の外周8マス）
  const subThemeCells = chart.cells.subThemes.map((cell, index) => {
    const { row, col } = subThemePositions[index];
    return (
      <div 
        key={`subtheme-${index}`} 
        style={{ 
          gridColumnStart: col, 
          gridColumnEnd: col + 1, 
          gridRowStart: row, 
          gridRowEnd: row + 1 
        }}
      >
        <MandalaCell 
          cell={cell} 
          onChange={(content) => updateSubThemeFn(index, content)}
          isMainTheme={true}
        />
      </div>
    );
  });
  
  // 外側グリッドの中心に同じサブテーマを表示（編集不可）
  const outerCenterCells = chart.cells.subThemes.map((cell, index) => {
    const { row, col } = outerCenterPositions[index];
    return (
      <div 
        key={`outer-center-${index}`} 
        style={{ 
          gridColumnStart: col, 
          gridColumnEnd: col + 1, 
          gridRowStart: row, 
          gridRowEnd: row + 1 
        }}
      >
        <MandalaCell 
          cell={cell} 
          onChange={(content) => updateSubThemeFn(index, content)}
          isMainTheme={true}
        />
      </div>
    );
  });
  
  // 詳細セルの位置マッピング（各外側のサブテーマの周りの8つの位置）
  const detailPositionMappings = [
    // 左上エリア（サブテーマは{row:2, col:2}に位置）
    [
      { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 },
      { row: 2, col: 1 }, /* ここにサブテーマ */ { row: 2, col: 3 },
      { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 },
    ],
    // 上中央エリア（サブテーマは{row:2, col:5}に位置）
    [
      { row: 1, col: 4 }, { row: 1, col: 5 }, { row: 1, col: 6 },
      { row: 2, col: 4 }, /* ここにサブテーマ */ { row: 2, col: 6 },
      { row: 3, col: 4 }, { row: 3, col: 5 }, { row: 3, col: 6 },
    ],
    // 右上エリア（サブテーマは{row:2, col:8}に位置）
    [
      { row: 1, col: 7 }, { row: 1, col: 8 }, { row: 1, col: 9 },
      { row: 2, col: 7 }, /* ここにサブテーマ */ { row: 2, col: 9 },
      { row: 3, col: 7 }, { row: 3, col: 8 }, { row: 3, col: 9 },
    ],
    // 左中央エリア（サブテーマは{row:5, col:2}に位置）
    [
      { row: 4, col: 1 }, { row: 4, col: 2 }, { row: 4, col: 3 },
      { row: 5, col: 1 }, /* ここにサブテーマ */ { row: 5, col: 3 },
      { row: 6, col: 1 }, { row: 6, col: 2 }, { row: 6, col: 3 },
    ],
    // 右中央エリア（サブテーマは{row:5, col:8}に位置）
    [
      { row: 4, col: 7 }, { row: 4, col: 8 }, { row: 4, col: 9 },
      { row: 5, col: 7 }, /* ここにサブテーマ */ { row: 5, col: 9 },
      { row: 6, col: 7 }, { row: 6, col: 8 }, { row: 6, col: 9 },
    ],
    // 左下エリア（サブテーマは{row:8, col:2}に位置）
    [
      { row: 7, col: 1 }, { row: 7, col: 2 }, { row: 7, col: 3 },
      { row: 8, col: 1 }, /* ここにサブテーマ */ { row: 8, col: 3 },
      { row: 9, col: 1 }, { row: 9, col: 2 }, { row: 9, col: 3 },
    ],
    // 下中央エリア（サブテーマは{row:8, col:5}に位置）
    [
      { row: 7, col: 4 }, { row: 7, col: 5 }, { row: 7, col: 6 },
      { row: 8, col: 4 }, /* ここにサブテーマ */ { row: 8, col: 6 },
      { row: 9, col: 4 }, { row: 9, col: 5 }, { row: 9, col: 6 },
    ],
    // 右下エリア（サブテーマは{row:8, col:8}に位置）
    [
      { row: 7, col: 7 }, { row: 7, col: 8 }, { row: 7, col: 9 },
      { row: 8, col: 7 }, /* ここにサブテーマ */ { row: 8, col: 9 },
      { row: 9, col: 7 }, { row: 9, col: 8 }, { row: 9, col: 9 },
    ],
  ];
  
  // 詳細セルのレンダリング
  const detailCells = chart.cells.details.flatMap((row, rowIndex) => 
    row.map((cell, colIndex) => {
      const position = detailPositionMappings[rowIndex][colIndex];
      
      // 外側の3×3グリッドのサブテーマ位置はスキップ
      const outerCenterPosition = outerCenterPositions[rowIndex];
      if (position.row === outerCenterPosition.row && position.col === outerCenterPosition.col) {
        return null;
      }
      
      // 中央3×3のエリア内はすべてスキップ（中央大項目と周囲の中項目）
      if (position.row >= 4 && position.row <= 6 && position.col >= 4 && position.col <= 6) {
        return null;
      }
      
      return (
        <div 
          key={`detail-${rowIndex}-${colIndex}`} 
          style={{ 
            gridColumnStart: position.col, 
            gridColumnEnd: position.col + 1, 
            gridRowStart: position.row, 
            gridRowEnd: position.row + 1 
          }}
        >
          <MandalaCell 
            cell={cell} 
            onChange={(content) => updateDetailFn(rowIndex, colIndex, content)}
          />
        </div>
      );
    }).filter(Boolean) // null要素を除外
  );
  
  return [...subThemeCells, ...outerCenterCells, ...detailCells];
}
