import StarfieldAnimation from "react-starfield-animation";

export default function Background() {
  return (
    <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
      numParticles={800}
      particleSpeed={0}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001}
    />
  );
}
