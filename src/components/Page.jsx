import { useState, useEffect } from "react";
function Page() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1);
  //원래 delay 1 -> 0.5
  //1.버튼을 누르면 delay를 바꾸게 한다.
  //2.바뀐 delay만큼 타이머를 걸어준다.
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + delay);
    }, delay * 1000);
    return () => {
      clearInterval(id);
    };
  }, [delay]);

  const seconds = [0.5, 1, 3, 5];

  return (
    <>
      <p>안녕하세요</p>
      <p>이 페이지에 들어오신지</p>
      <div>
        <h3>타이머의 간격이 바뀌도록 하세요</h3>
        {seconds.map((s) => (
          <button onClick={() => setDelay(s)}>{s}</button>
        ))}
      </div>
      <p>
        <strong>{count}</strong>초 되었습니다.
      </p>
    </>
  );
}

export default Page;
