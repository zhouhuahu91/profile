import React from "react";

interface HuIconProps {
  size?: string;
  className?: string;
}

const HuIcon: React.FC<HuIconProps> = ({ className, size }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 513.000000 487.000000"
      height={size ? size : "46"}
      className={className && className}
      width={size ? size : "46"}
    >
      <g
        transform="translate(0.000000,487.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M458 3128 c-4 -1064 -3 -1789 2 -1796 3 -4 107 -6 233 -4 l227 3 0
454 0 455 415 0 415 0 2 -455 3 -456 223 0 c122 0 226 1 231 1 4 0 8 503 8
1130 l0 1130 -233 0 -234 0 0 -440 0 -440 -415 0 -415 0 0 440 0 440 -230 0
-230 0 -2 -462z"
        />
        <path d="M2790 3505 l0 -85 235 0 235 0 0 85 0 85 -235 0 -235 0 0 -85z" />
        <path
          d="M4070 3505 l0 -85 228 0 227 0 3 56 c2 31 0 69 -3 85 l-7 29 -224 0
-224 0 0 -85z"
        />
        <path d="M2792 3203 l3 -88 435 0 435 0 3 88 3 87 -441 0 -441 0 3 -87z" />
        <path
          d="M4060 2726 c0 -609 -4 -663 -54 -769 -53 -114 -117 -167 -235 -193
-85 -19 -187 -15 -270 11 -74 23 -159 107 -189 188 -45 119 -52 203 -52 623
l0 394 -230 0 -230 0 0 -407 c0 -419 5 -496 46 -682 40 -181 137 -334 275
-436 61 -46 194 -98 303 -120 134 -26 424 -17 551 17 121 33 191 69 268 136
104 91 144 147 195 277 76 191 92 375 92 1032 l0 493 -235 0 -235 0 0 -564z"
        />
      </g>
    </svg>
  );
};

export default HuIcon;
