import html2canvas from 'html2canvas';

// 画像としてエクスポート
export async function exportAsImage(elementId: string): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('エクスポート対象の要素が見つかりません');
    
    // 設定を最適化して画像エクスポートの改善
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2, // 高解像度
      useCORS: true, // 外部リソースを許可
      allowTaint: true, // より多くの要素を描画許可
      logging: false, // ログを最小化
      // letterRendering: true, // テキストレンダリングの改善
      scrollX: 0, // スクロール位置に影響されないよう固定
      scrollY: 0,
    });
    
    const dataUrl = canvas.toDataURL('image/png');
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUrl);
    linkElement.setAttribute('download', 'mandala-chart.png');
    linkElement.click();
  } catch (error) {
    console.error('画像エクスポートに失敗しました:', error);
    throw error;
  }
}