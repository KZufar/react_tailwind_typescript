import React, {createElement as e, useState} from 'react';
import logo from './logo.svg';

function App() {
    const [count, setCount] = useState(0)


    return e('h1', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            onClick:() => setCount(count + 1)
        }, 'Click me!'),
    ])
}

export default App;
