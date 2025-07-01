import React from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div style={containerStyle}>
      <span>{message}</span>
      <button onClick={onClose} style={buttonStyle}>✖</button>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 1.5rem',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  zIndex: 1000,
};

const buttonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1.2rem',
};
