import { useState } from 'react';

const KeyPro = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // 요소를 구분할 수 있는 값인 id를 통해 filter 메소드로 필터링 가능하다.
  const onDelete = (id) => {
    setNames(names.filter((name) => name.id !== id));
  };

  const handleClick = () => {
    if (inputText.trim() === '') return;

    const newName = {
      id: nextId,
      text: inputText,
    };
    setNames([...names, newName]);
    setNextId(nextId + 1);
    setInputText('');
  };

  const nameList = names.map((name) => (
    <li
      key={name.id}
      style={{
        width: '60%',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
      }}
    >
      {name.text}
      <button type="text" onClick={() => onDelete(name.id)}>
        삭제
      </button>
    </li>
  ));

  return (
    <div>
      <div
        style={{
          fontSize: '32px',
          fontWeight: 800,
          marginTop: '10px',
        }}
      >
        "리스트 CRUD"
      </div>
      <hr />
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '500px',
          maxHeight: '500px',
          overflowY: 'scroll',
        }}
      >
        {nameList}
      </ul>
      <hr />
      <input
        type="text"
        value={inputText}
        placeholder="단어"
        style={{ paddingTop: '4px', paddingBottom: '2px', marginRight: '2px' }}
        onChange={handleChange}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default KeyPro;
