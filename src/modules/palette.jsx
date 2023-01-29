import React from "react";

const hsb2hsl = (h, s, b) => {
  let ss = s / 100.0;
  let bb = b / 100.0;

  const l = (1 / 2) * bb * (2 - ss);
  const sss = (bb * ss) / (1 - Math.abs(2 * l - 1));

  return { h: h, s: sss * 100, l: l * 100 };
};

const hsb2rgb = (h, s, b) => {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return `rgb(${255 * f(5)}, ${255 * f(3)}, ${255 * f(1)})`;
};

export const ColorPage = (props) => {
  const items = [...Array(360).keys()].map((c) => {
    const saturation = 50;
    const brightness = 60;
    let { h, s, l } = hsb2hsl(c, saturation, brightness);
    const bg = `hsl(${h}deg, ${s}%, ${l}%)`;
    //     console.log("hsl =", h, s, l);
    //     const fg = `hsl(${h + 180}, 50%, 50%)`;
    const text = hsb2rgb(c, saturation, brightness);
    return (
      <div
        className="w-1/3 h-15"
        key={c}
        style={{
          backgroundColor: bg,
          color: "#FFF",
          border: "1px dotted #000",
        }}
      >
        {/* #{text} */}#{c}
      </div>
    );
  });
  return (
    <div className="w-full h-full flex justify-start align-middle flex-wrap overflow-auto">
      {items}
    </div>
  );
};
