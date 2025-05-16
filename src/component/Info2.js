import React, { Fragment, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <Fragment>
      <div>
        <input name="name" value={state.name} onChange={onChange} />
        <input name="nickname" value={state.nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {state.name}
        </div>
        <div>
          <b>닉네임 : </b> {state.nickname}
        </div>
      </div>
    </Fragment>
  );
};

export default Info2;
