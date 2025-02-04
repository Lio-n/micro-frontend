const App: React.FC = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        margin: '2rem',
        border: '5px dotted',
        borderRadius: '10px',
        width: '50vw',
        minWidth: '25rem',
        height: '25rem',
        backgroundColor: '#00ffff75',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          letterSpacing: '1px',
          fontWeight: '500',
          fontSize: '2rem',
        }}
      >
        [noodle frontend]
      </h2>
      {children}
    </div>
  );
};

export default App;
