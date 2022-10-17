import { useState, useEffect } from "react";
function Page() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  const seconds = [0.5, 1, 3, 5];
  return (
    <>
      <p>안녕하세요</p>
      <p>이 페이지에 들어오신지</p>
      <div>
        <h3>타이머의 간격이 바뀌도록 하세요</h3>
        {seconds.map((s) => (
          <button>{s}</button>
        ))}
      </div>
      <p>
        <strong>{count}</strong>초 되었습니다.
      </p>
    </>
  );
}

export default Page;
