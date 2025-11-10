import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0D",
          color: "#D2483A",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        MK
      </div>
    ),
    {
      ...size,
    }
  );
}

