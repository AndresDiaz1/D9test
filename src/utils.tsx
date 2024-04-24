import React from "react";
export const TWO_PI = Math.PI * 2;

/**
 * Converts 2D polar coordinates to cartesian coordinates.
 */
export const polarToCartesian = (
  center: { x: number; y: number },
  radius: number,
  thetaInRadians: number
) => {
  return {
    x: center.x + Math.cos(thetaInRadians) * radius,
    y: center.y + Math.sin(thetaInRadians) * radius,
  };
};

/**
 * Clamps `n` to the range [min, max].
 */
export const clamp = (n: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, n));
};

/**
 * Returns an svg path definition for a circular arc.
 * Reference for arc commands: https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
 */
export const getCircularArcPathD = ({
  center,
  startTheta,
  endTheta,
  radius,
}: {
  center: { x: number; y: number };
  startTheta: number;
  endTheta: number;
  radius: number;
}) => {
  const arcStart = polarToCartesian(center, radius, startTheta);
  const arcDest = polarToCartesian(center, radius, endTheta);
  const largeArcFlag = endTheta - startTheta > Math.PI ? 1 : 0;
  const sweepFlag = endTheta >= startTheta ? 1 : 0;

  return `M${arcStart.x},${arcStart.y} A${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${arcDest.x},${arcDest.y}`;
};

const SEC_DURATION = 1000;
const MIN_DURATION = SEC_DURATION * 60;
const HOUR_DURATION = MIN_DURATION * 60;

/**
 * Returns a formatted string of the remaining time relative to `totalMs`.
 * Does not support > 99 hours.
 */
export const getRemainingTimeString = (
  msRemaining: number,
  totalMs: number
) => {
  const hrs = Math.floor(msRemaining / HOUR_DURATION);
  const mins = Math.floor((msRemaining - hrs * HOUR_DURATION) / MIN_DURATION);
  const secs = Math.ceil(
    (msRemaining - hrs * HOUR_DURATION - mins * MIN_DURATION) / SEC_DURATION
  );
  const hrsDisplay = `${hrs < 10 ? "0" : ""}${hrs}`;
  const minsDisplay = `${mins < 10 ? "0" : ""}${mins}`;
  const secsDisplay = `${secs < 10 ? "0" : ""}${secs}`;
  let result = secsDisplay;
  if (totalMs >= MIN_DURATION) {
    result = `${minsDisplay}:${result}`;
  }
  if (totalMs >= HOUR_DURATION) {
    result = `${hrsDisplay}:${result}`;
  }
  return result;
};

/**
 * A very crude text sizing utility. Returns a div with the given text.
 */
export const getSizedText = (text: string, size: number) => {
  return (
    <div
      style={{
        fontSize: size / (1.1 * text.length),
      }}
    >
      {text}
    </div>
  );
};
