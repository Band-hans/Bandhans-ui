import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm Bandhan's Bot 🤖. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      console.log('🔄 Sending to backend:', newMessages);
      const res = await axios.post('http://localhost:5000/api/chat', {
        messages: newMessages,
      });
      console.log('✅ Response from backend:', res.data);

      const botReply = res.data.reply;
      setMessages([...newMessages, { from: 'bot', text: botReply }]);
    } catch (err) {
      console.error('❌ Chat error:', err);
      setMessages([...newMessages, { from: 'bot', text: "Oops, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Bandhan’s Bot</span>
            <button className="chat-close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="chat-message bot">Typing...</div>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Ask anything..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default ChatBot;
