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

  const handleClick = () => {
    if (inputText.trim() === '') return;

    const newName = {
      id: nextId,
      text: inputText,
    };
    setNames([...names, newName]);
    setNextId(nextId + 1);
    setInputText(''); // 입력창 초기화
  };

  const nameList = names.map((name) => (
    <li key={name.id} style={{ fontWeight: 500 }}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <div style={{ fontSize: '12px', fontWeight: 800, marginTop: '10px' }}>
        " 리스트 추가하기 "
      </div>
      <hr />
      <ul>{nameList}</ul>
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
