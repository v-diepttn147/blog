"use client";

import { useEffect, useState } from "react";

interface IMagneticPointsProps {
  width?: number; // number of points
  height?: number; // number of points
}

export default function MagneticPoints(props: IMagneticPointsProps) {
  const { width = 20, height = 20 } = props;

  const [onPoints, setOnPoints] = useState<number[]>([]);

  useEffect(() => {
    setInterval(() => {
      const points = Array.from({ length: width * height }).map((_, index) => {
        return Math.random() > 0.5 ? index : -1;
      });

      setOnPoints(points.filter((point) => point !== -1));
    }, 3 * 1000);
  }, [height, width]);

  return (
    <div className="flex justify-center items-center gap-5">
      {Array.from({ length: width }).map((_, rowIdx) => (
        <div key={rowIdx} className="flex-col flex gap-5">
          {Array.from({ length: height }).map((_, colIdx) => (
            <div
              key={colIdx}
              className={`w-1 h-1 bg-zinc-500 rounded-full ${
                onPoints.includes(rowIdx * colIdx) ? "animate-flash" : ""
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
