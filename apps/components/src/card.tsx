import React from 'react';

export default function Card({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style>{`
        .container {
          margin: 4rem;
          padding: 2rem;
          border: 2px dotted rgba(245, 40, 145, 1);
          border-radius: 10px;
          background-color: rgba(245, 40, 145, 0.5);
        }
        
      `}</style>
    </>
  );
}
