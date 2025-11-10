import { ImageResponse } from "next/og";
import { infos } from "@/lib/data";

export const alt = infos.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0D",
          color: "#FFFFFF",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#D2483A",
          }}
        >
          {infos.name}
        </div>
        <div
          style={{
            fontSize: 40,
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          {infos.slogan}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

