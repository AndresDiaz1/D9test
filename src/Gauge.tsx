import React, { ReactNode, CSSProperties } from "react";
import { clamp, getCircularArcPathD, TWO_PI } from "./utils";

/**
 * Renders an SVG arc showing current "fullness" for a `value` between `from` and `to`.
 */
export const Gauge = ({
  from,
  to,
  value,
  fgColor = "salmon",
  bgColor = "#dddddd",
  strokeWidth = 16,
  getCenterLabel,
  style,
  size = 300,
}: {
  from: number;
  to: number;
  value: number;
  fgColor?: string;
  bgColor?: string;
  strokeWidth?: number;
  getCenterLabel?: (size: number) => ReactNode;
  style?: CSSProperties;
  size: number;
}) => {
  const innerStrokeWidth = strokeWidth;
  const outerStrokeWidth = innerStrokeWidth + 6;
  const center = size / 2;
  const arcRadius = size / 2 - outerStrokeWidth / 2;
  const progress = clamp((value - from) / (to - from), 0.00001, 0.99999);
  const startTheta = Math.PI / 2;
  const endTheta = startTheta + TWO_PI * progress;
  const fgD = getCircularArcPathD({
    center: { x: center, y: center },
    startTheta,
    endTheta,
    radius: arcRadius,
  });
  const bgD = getCircularArcPathD({
    center: { x: center, y: center },
    startTheta,
    endTheta: startTheta + TWO_PI * 0.999,
    radius: arcRadius,
  });

  return (
    <div style={style}>
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${size} ${size}`}
          style={{
            width: size,
            height: size,
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <path
            strokeLinecap="round"
            stroke={bgColor}
            strokeWidth={outerStrokeWidth}
            fill="none"
            d={bgD}
          />
          {progress > 0 && (
            <path
              strokeLinecap="round"
              stroke={fgColor}
              strokeWidth={innerStrokeWidth}
              fill="none"
              d={fgD}
            />
          )}
        </svg>
        {getCenterLabel ? getCenterLabel(size) : null}
      </div>
    </div>
  );
};
