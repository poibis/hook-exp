import React, { useState, useEffect } from 'react';

function Example() {
    // "count" 라는 새 상태 변수를 선언합니다
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate와 비슷합니다
    useEffect(()=> {
        // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
        document.title = `You clicked ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}>
                Click me
            </button>
        </div>
    );
}



const Months = () => {
    const now = new Date();
    const todaySmonth = now.getMonth();
    const todaySday = now.getDate();

    return (
        <div>{todaySmonth}월 {todaySday}일</div>
    );
};


export {Example, Months};
