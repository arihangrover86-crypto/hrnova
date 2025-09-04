import { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any;
    }
  }
}

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  style?: React.CSSProperties;
}

export default function LottieAnimation({ 
  src, 
  className = "", 
  loop = true, 
  autoplay = true, 
  speed = 1,
  style = {}
}: LottieAnimationProps) {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <lottie-player
      ref={ref}
      src={src}
      background="transparent"
      speed={speed}
      style={style}
      className={className}
      loop={loop}
      autoplay={autoplay}
      data-testid="lottie-animation"
    />
  );
}
