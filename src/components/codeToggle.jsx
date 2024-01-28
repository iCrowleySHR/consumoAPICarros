import React, { useState } from 'react';

function CodeToggle({ codeId, children }) {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar código' : 'Mostrar código'}
      </button>
      {isVisible && (
        <code id={codeId}>
          <pre>
            {children}
          </pre>
        </code>
      )}
    </div>
  );
}

export default CodeToggle;
