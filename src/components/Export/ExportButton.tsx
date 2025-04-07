'use client';

import React, { useState } from 'react';
import { exportAsImage } from '@/lib/export';
import { MandalaChart } from '@/types';
import Button from '../ui/Button';

interface ExportButtonProps {
  chart: MandalaChart;
  chartElementId: string;
}

export default function ExportButton({ chart, chartElementId }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  
  const handleExportImage = async () => {
    try {
      setIsExporting(true);
      await exportAsImage(chartElementId);
    } catch (error) {
      console.error('画像エクスポートに失敗しました:', error);
      alert('エクスポートに失敗しました。もう一度お試しください。');
    } finally {
      setIsExporting(false);
    }
  };
  
  return (
    <div className="flex space-x-2">
      <Button 
        variant="primary" 
        onClick={handleExportImage} 
        disabled={isExporting}
      >
        画像として保存
      </Button>
    </div>
  );
}
