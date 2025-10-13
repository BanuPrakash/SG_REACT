import { useState } from 'react';
import SlowList from './ShowList';
import { useDeferredValue } from 'react';


export default function SlowApp() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      {/* <SlowList text={text} /> */}
      <SlowList text={deferredText} />
    </>
  );
}
