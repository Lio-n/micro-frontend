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
        backgroundColor: 'rgba(128, 0, 255, 0.46)',
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
        [dashboard frontend (craco@7.1.0)]
      </h2>
    </div>
  );
};

export default App;
