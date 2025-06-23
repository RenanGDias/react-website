import { useEffect, useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Color: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(prevCount => prevCount + 1);
    }

    function subtractCount() {
        setCount(prevCount => prevCount - 1);
    }

    function changeColor() {
        setColor(prevColor => prevColor === "green" ? "red" : "green");
    }

    return( <>
                <p style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button><br />
                <button onClick={changeColor}>Change color</button>
            </>);
}

export default MyComponent;