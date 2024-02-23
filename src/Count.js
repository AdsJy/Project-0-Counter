import React from "react";


export default function Count(){

    const [count, setCount] = React.useState(0)

function increseChange(){
    setCount(count => count + 1)
}
function resetChange(){
    setCount(0)
}
function decreseChange(){
    setCount(count => count - 1)
}



return(
    <div className="container">
        <span className="count">{count}</span>
        <div className="three-btns">
            <button onClick={decreseChange}>Decrease</button>
            <button onClick={resetChange}>Reset</button>
            <button onClick={increseChange}>Increase</button>
        </div>
    </div>
)

}