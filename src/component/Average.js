import { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers) => {
  if (numbers.length === 0) return;
  const sum = numbers.reduce((a, b) => a + b);
  console.log('평균값 계산 중...');
  // array.reduce(callback, initialValue)
  // callback : 배열의 각 요소에 대해 실행할 함수
  // initialValue : 누적값의 초기값
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  // 등록을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 변환하기 위한 변수
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
    console.log(list);
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수를 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
