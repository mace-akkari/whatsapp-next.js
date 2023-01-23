import { Circle } from "better-react-spinkit";

function Loading() {
  const LOGO =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png";
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
