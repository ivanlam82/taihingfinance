import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "#A67C3F",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* This creates a golden triangle shape representing the pyramid */}
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
