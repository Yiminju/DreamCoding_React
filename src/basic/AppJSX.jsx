import "./App.css";

function AppJSX() {
  const name = "Minju";
  const list = ["우유", "딸기", "바나나"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://media.istockphoto.com/id/1600595506/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EA%B3%A0%EC%96%91%EC%9D%B4%EC%99%80-%EC%95%A0%EC%99%84%EB%8F%99%EB%AC%BC-%EC%A3%BC%EC%9D%B8%EC%9D%98-%EC%9A%B0%EC%A0%95.jpg?s=612x612&w=is&k=20&c=kT44HdXHdixKNWsKdTfevUvtvJnz27IpM6mLr60OQuE="
        alt="photo"
      />
    </>
  );
}

export default AppJSX;
