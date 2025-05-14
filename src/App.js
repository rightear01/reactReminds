import "./App.css";

function App() {
  const arr = [
    {id : 1, val : true},
    {id : 2, val : false},
    {id : 3, val : true}
  ]

  let arr2 = arr.concat({id: 4}); 
  // 하나 이상의 배열 또는 값들을 기존 배열에 합쳐 새로운 배열을 반환한다.
  
  arr2.filter(item => item.id !== 2);
  // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
  // 조건을 만족하는 요소들만 제외하고 새 배열을 반환한다.
  // 원본 배열은 변경되지 않는다.

  arr2.map(item => (item.id === 1 ? {...item, val: false} : item));
  // id가 1인 요소의 val 값을 false로 변경한다.
  // map() 메서드는 배열 내의 각 요소에 대해 제공된 함수를 호출하고,
  // 그 결과로 새로운 배열을 반환한다.
  // 원본 배열은 변경되지 않는다.

  return (
    <div className="App">
      {
        arr2.map(item => (
          <div key={item.id}>
            {item.id} : {item.val ? 'true' : 'false'}
          </div>
        ))
      }
    </div>
  )
}

export default App;