import { useState } from "react";

const TestComp = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div>

               <button onClick={e => {
                if(show == false) {
                    setShow(true)
                }else{
                    setShow(false)
                }
               }}>haw you do</button>
               <div className={show ? '' : 'invisible'}>
                <p>clofelmaot</p>
                <p>kaayu</p>
               </div>

            </div>
        </>
    );
}

export default TestComp;