import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Sparkles, RefreshCw } from 'lucide-react';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Üdvözlöm a Dunakanyar Esztétika virtuális asszisztensében! 👋' },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setIsTyping(true), 800);
    const timer2 = setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { id: 2, sender: 'bot', text: 'Dr. Kondorosi Ildikó vagyok. Segítek megtalálni az Ön bőrének legmegfelelőbb kezelést. Miben segíthetek ma?' }
      ]);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMsg = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulated response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: 'Köszönöm! Kérem, válasszon az alábbi kategóriák közül, vagy írja körül a problémát.' 
      }]);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-primary-900/10 overflow-hidden border border-white/50 flex flex-col h-[550px] relative z-20 backdrop-blur-sm">
      {/* Premium Header */}
      <div className="bg-white p-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <Bot size={24} strokeWidth={1.5} />
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight">AI Asszisztens</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-gray-500 text-xs font-medium">Online</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([{ id: 1, sender: 'bot', text: 'Miben segíthetek ma?' }])}
          className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
          title="Beszélgetés újrakezdése"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-gradient-to-b from-gray-50/50 to-white scrollbar-thin scrollbar-thumb-gray-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full animate-fade-in ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-primary-600 text-white rounded-br-none'
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none shadow-gray-200/50'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start w-full animate-fade-in">
             <div className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
               <span className="text-xs text-gray-400 font-medium mr-1">Ír...</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="px-5 pb-2 bg-white">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['Ránctalanítás', 'Bőrproblémák', 'Esztétika', 'Árak'].map((chip) => (
             <button key={chip} className="whitespace-nowrap text-xs font-bold bg-secondary-50 text-secondary-700 px-4 py-2 rounded-xl hover:bg-secondary-100 transition-colors border border-secondary-100 flex items-center gap-1.5">
               <Sparkles size={12} /> {chip}
             </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="relative flex items-center gap-2 group">
          <input
            id="chatbot-input"
            type="text"
            placeholder="Írjon üzenetet..."
            className="w-full bg-gray-50 text-gray-700 text-sm rounded-xl py-3.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all border border-gray-100 focus:border-primary-200"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="absolute right-2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:hover:bg-primary-600 transition-all shadow-md hover:shadow-lg"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};