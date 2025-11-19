import React, { useEffect } from 'react';
import { X, Circle } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'pdf' | 'text';
  content: string; // URL for pdf, Markdown/HTML string for text
  title: string;
}

// Simple parser to render bold text and lists without heavy dependencies
const MarkdownRenderer = ({ content }: { content: string }) => {
  // Helper to parse inline styles like **bold**
  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="text-accent-primary font-bold font-mono tracking-tight">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-[15px] leading-relaxed text-gray-300 font-sans">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        
        // Handle empty lines as spacers
        if (!trimmed) return <div key={i} className="h-3" />; 

        // Handle bullet points
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
          const cleanText = trimmed.replace(/^[•-]\s*/, '');
          return (
            <div key={i} className="flex gap-3 ml-1">
              <span className="text-accent-primary mt-2 shrink-0 text-[8px]">
                 <Circle fill="currentColor" />
              </span>
              <span className="flex-1">{parseInline(cleanText)}</span>
            </div>
          );
        }

        // Default paragraph
        return <p key={i} className="min-h-[1.5em]">{parseInline(line)}</p>;
      })}
    </div>
  );
};

const ContentModal: React.FC<ContentModalProps> = ({ isOpen, onClose, type, content, title }) => {
  // Disable scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const viewOnlyUrl = type === 'pdf' ? `${content}#toolbar=0&navpanes=0&scrollbar=0` : '';
  const isContact = title.includes("Contact") || title.includes("联系");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className={`relative w-full bg-bg-card border border-bg-hover rounded-xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200 overflow-hidden ${
          isContact ? 'max-w-md h-auto' : 'max-w-4xl h-[85vh]'
        }`}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-bg-hover bg-bg/50">
          <h3 className="text-lg font-mono font-bold text-white tracking-wide truncate pr-4">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-bg-hover rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className={`bg-bg relative ${type === 'pdf' ? 'flex-1' : ''}`}>
          {type === 'pdf' ? (
            <iframe 
              src={viewOnlyUrl}
              className="w-full h-full border-0 bg-white"
              title="PDF Preview"
            />
          ) : (
            <div className={`overflow-y-auto ${isContact ? 'p-8 py-10' : 'p-8 h-full'}`}>
               {isContact ? (
                 <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-dim text-accent-primary mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div className="text-left inline-block">
                        <MarkdownRenderer content={content} />
                    </div>
                 </div>
               ) : (
                 <MarkdownRenderer content={content} />
               )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentModal;