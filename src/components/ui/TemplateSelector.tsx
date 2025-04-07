'use client';

import React, { useState } from 'react';
import { Template } from '@/types';
import { createEmptyChart } from '@/lib/storage';
import { getTemplateById } from '@/lib/templates';

interface TemplateSelectorProps {
  templates: Template[];
  onSelectTemplate?: (template: Template) => void;
}

export default function TemplateSelector({ 
  templates, 
  onSelectTemplate 
}: TemplateSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedId(id);
    
    if (id && onSelectTemplate) {
      const template = getTemplateById(id);
      if (template) {
        onSelectTemplate(template);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="template-select" className="block text-sm font-medium text-gray-700 mb-1">
        テンプレートを選択
      </label>
      <select
        id="template-select"
        value={selectedId}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">-- テンプレートを選択 --</option>
        <option value="blank">白紙から作成</option>
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name} - {template.description}
          </option>
        ))}
      </select>
    </div>
  );
}
