
import React, { useState } from 'react';
import { generateLoveLetter } from '../services/geminiService';

interface Props {
  partnerName: string;
  userName: string;
}

const AILetterSection: React.FC<Props> = ({ partnerName, userName }) => {
  const [memories, setMemories] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!memories.trim()) return;
    setLoading(true);
    const result = await generateLoveLetter(partnerName, userName, memories);
    setLetter(result);
    setLoading(false);
  };

  return (
    <section id="ai-letter" className="py-20 px-6 bg-white relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif-elegant text-rose-900 text-center mb-12">
          An Eternal Letter
        </h2>
        
        <div className="bg-rose-50 p-8 rounded-3xl shadow-xl border border-rose-100">
          {!letter ? (
            <div className="space-y-6">
              <p className="text-rose-800 text-center text-lg italic">
                Help me write the perfect anniversary message for {partnerName}...
              </p>
              <textarea
                className="w-full h-32 p-4 rounded-xl border-2 border-rose-200 focus:border-rose-400 focus:ring-rose-400 outline-none transition-all resize-none text-rose-900"
                placeholder="What are some things you love about her? Any special inside jokes or moments? (e.g. her smile, our trip to Paris, how she handles her coffee...)"
                value={memories}
                onChange={(e) => setMemories(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={loading || !memories.trim()}
                className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white font-bold py-4 rounded-xl shadow-lg transform transition-transform hover:scale-[1.02] active:scale-95"
              >
                {loading ? 'Crafting our story...' : 'Generate My Heartfelt Message'}
              </button>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-10 rounded-2xl shadow-inner border border-rose-100 relative">
                <div className="absolute top-4 right-4 text-4xl text-rose-100">"</div>
                <div className="font-romantic text-2xl md:text-3xl text-rose-900 whitespace-pre-wrap leading-relaxed italic">
                  {letter}
                </div>
                <div className="mt-8 text-right font-serif-elegant text-rose-700">
                  — Yours forever, {userName}
                </div>
              </div>
              <button
                onClick={() => setLetter('')}
                className="text-rose-600 hover:text-rose-800 font-medium transition-colors"
              >
                Write another version...
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AILetterSection;
