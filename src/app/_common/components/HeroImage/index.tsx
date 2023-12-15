"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMousePosition } from "../../hooks";

const IMAGE_DEG_OFFSET = 10;
const MAX_DEG = 35;
const MIN_DEG = -MAX_DEG;

function HeroImage() {
  const mousePosition = useMousePosition();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!mousePosition) return;

    const { x, y } = mousePosition;
    const {
      x: imageX,
      y: imageY,
      width,
      height,
    } = imageRef.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    const centerImageX = width / 2 + imageX;
    const centerImageY = height / 2 + imageY;
    const deltaX = x - centerImageX;
    const deltaY = centerImageY - y;
    const deg = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
    imageRef.current?.style.setProperty(
      "transform",
      `rotate(${calculateLimitedDeg(deg)}deg)`
    );

    function calculateLimitedDeg(deg: number) {
      if (deg > MAX_DEG + IMAGE_DEG_OFFSET) return MAX_DEG + IMAGE_DEG_OFFSET;
      if (deg < MIN_DEG + IMAGE_DEG_OFFSET) return MIN_DEG + IMAGE_DEG_OFFSET;
      return deg + IMAGE_DEG_OFFSET;
    }
  }, [mousePosition]);

  return (
    <Image
      ref={imageRef}
      src="/img/avatar.png"
      alt="hero image"
      width={300}
      height={300}
      className={`border border-white border-opacity-50 rounded-full z-10 transition-all`}
    />
  );
}

export default HeroImage;
