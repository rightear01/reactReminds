import { useState } from "react";
import { Fragment } from "react";

const EventPracticeWithState = () => {
    const [keyState, setKeyState] = useState({
        username: '',
        message: ''
    })

  const onChangeNameVal = (e) => {
    const { name, value } = e.target;
    setKeyState({
        ...keyState,
        [name]: value,
    });
  };

    const onClickBtn = () => {
        alert(keyState.username + ' : ' + keyState.message);
        setKeyState({
            username: '',
            message: ''
        })
    }

    const handleKeyEnter = (e) => {
        console.log(e)
        if(e.key === 'Enter'){
            onClickBtn();
        }
    }

    return(
        <Fragment>
             <input
                type='text'
                name="username"
                placeholder="사용자 이름"
                value={keyState.name}
                onChange={onChangeNameVal}
            ></input>
            <input
                type='text'
                name="message"
                placeholder="사용자 메시지"
                value={keyState.message}
                onChange={onChangeNameVal}
                onKeyDown={handleKeyEnter}
            ></input>
            <br></br>
            <button onClick={onClickBtn}>확인</button>
        </Fragment>
    );
}

export default EventPracticeWithState;