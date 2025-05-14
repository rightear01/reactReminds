import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히가세요');

    const [color, setColor] = useState('black');
    
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <div style={{color}}>{message}</div>
            {/* 
                이처럼 color 변수가 button에 부착된 이벤트 헨들링에 의해서 state 값이 변하게 되고
                변한 state의 값으로 style이 변하게 된다. 
            */}
            <button style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>
        </div>
    );
}

export default Say;