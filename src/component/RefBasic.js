import React from 'react';

const RefBasic = () => {
  const input = React.createRef();

  const handleFocus = () => {
    input.current.focus();
  };

  return (
    <div>
      <input ref={input} onFocus={handleFocus}></input>
    </div>
  );
};

export default RefBasic;
