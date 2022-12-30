import React, { useState } from 'react';
import { Example, Months }  from './Example';
import Counter2 from './Counter';
import Info from './Info';
import ContextSample from './ContextSample';
import FriendStatusWithCounter from './Ex2';


const App = () => {

  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <div>
        <button
          onClick={ ()=> {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr/>
        {visible && <Info/>}
      </div>
      <div>
        <hr/>
        <Example />
        <Months />
      </div>
      <div>
        <hr/>
        <Counter2 init={5}/>
      </div>
      <div>
        <hr/>
        <Info/>
      </div>
      <div>
        <hr/>
        <ContextSample />

      </div>

      <div>
        <hr/>
        <FriendStatusWithCounter />
      </div>



    </React.Fragment>
  );
};

export default App;
