'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MandalaCell as MandalaCardType } from '@/types';

interface MandalaCardProps {
  cell: MandalaCardType;
  onChange: (content: string) => void;
  isCenter?: boolean;
  isMainTheme?: boolean;
}

export default function MandalaCell({ 
  cell, 
  onChange, 
  isCenter = false, 
  isMainTheme = false 
}: MandalaCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState(cell.content);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    setCurrentContent(cell.content);
  }, [cell.content]);
  
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEditing]);
  
  const handleClick = () => {
    setIsEditing(true);
  };
  
  const handleBlur = () => {
    setIsEditing(false);
    onChange(currentContent);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 文字数制限を適用
    const maxLength = isCenter ? 30 : isMainTheme ? 25 : 20;
    const content = e.target.value.slice(0, maxLength);
    setCurrentContent(content);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
  };
  
  // セルの種類に応じたスタイルを適用
  const getBgColor = () => {
    if (isCenter) return 'bg-blue-100 hover:bg-blue-200';
    if (isMainTheme) return 'bg-green-50 hover:bg-green-100';
    return 'bg-gray-50 hover:bg-gray-100';
  };
  
  const cellStyle = `
    p-2 rounded border border-gray-200 transition-colors duration-200
    ${getBgColor()}
    ${cell.bold ? 'font-bold' : ''}
    ${cell.color ? `text-${cell.color}-700` : ''}
    flex items-center justify-center text-center min-h-[80px] h-full w-full
  `;

  return (
    <div className={cellStyle} onClick={handleClick}>
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={currentContent}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full h-full bg-transparent resize-none focus:outline-none text-center"
          style={{ minHeight: '60px' }}
          maxLength={isCenter ? 30 : isMainTheme ? 25 : 20}
        />
      ) : (
        <p className="break-words w-full">{currentContent || ''}</p>
      )}
    </div>
  );
}
