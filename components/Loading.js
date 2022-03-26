/* eslint-disable @next/next/no-img-element */
import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "whitesmoke",
      }}
    >
      <div>
        <img
          alt="loading"
          src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"
          height={100}
          style={{ marginBottom: "25px" }}
        />
        <Circle color="grey" size={60} />
      </div>
    </center>
  );
}

export default Loading;
