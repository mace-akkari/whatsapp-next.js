import { Circle } from "better-react-spinkit";

function Loading() {
  const LOGO =
    "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png ";
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src={LOGO}
          alt="Company Logo"
          style={{ marginBottom: 10 }}
          height={200}
        ></img>
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
