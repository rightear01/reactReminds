import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickName: '',
  });

  const { name, nickName } = state;

  return (
    <div>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickName" value={nickName} onChange={onChange}></input>
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
