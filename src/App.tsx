import './App.css';

import { useEffect, useState } from 'react';

import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    if (isOn) alert('Timer is on');

    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div>
      Ready to code!
      {'Nove'}
      <Counter />
    </div>
  );
}

export default App;
