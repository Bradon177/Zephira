"use client";

import React from 'react';
import BrowserPreview from './BrowserPreview';

export default function FeatureSection({ 
  title, 
  description, 
  icon: Icon, 
  url, 
  features = [], 
  previewContent,
  reversed = false 
}) {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center mb-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      {/* Explicación del Usuario */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#8b7fa8]/10 rounded-2xl text-[#8b7fa8]">
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h3>
        </div>
        
        <p className="text-slate-600 text-lg leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="w-2 h-2 bg-[#8b7fa8] rounded-full shrink-0" />
              <span className="text-sm font-bold text-slate-700">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vista Previa Interactiva */}
      <div className="flex-1 w-full max-w-2xl">
        <BrowserPreview url={url}>
          {previewContent}
        </BrowserPreview>
      </div>
    </div>
  );
}
