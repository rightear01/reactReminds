import { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickName,
    });
    return () => {
      console.log('cleanUp');
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName}></input>
      <input value={nickName} onChange={onChangeNickname}></input>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickName}
      </div>
    </div>
  );
};

export default Info;
