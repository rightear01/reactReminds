const EventPractice = () => {
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="message"
                placeholder="input something"
                onChange={(e) => {console.log(e.target.value)}}
            ></input>
        </div>
    );
}

export default EventPractice;