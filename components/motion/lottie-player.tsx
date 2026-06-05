"use client";

import Lottie, { type LottieComponentProps } from "lottie-react";

type LottiePlayerProps = Omit<LottieComponentProps, "animationData"> & {
  animationData: object;
  className?: string;
};

/** JSON Lottie loops — hero icons, empty states, micro-illustrations */
export function LottiePlayer({
  animationData,
  className,
  loop = true,
  ...props
}: LottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
      {...props}
    />
  );
}
