import React, { useId } from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9-_]/g, "");
  const goldId = `gold-${safeId}`;
  const petalId = `petal-${safeId}`;
  const innerPetalId = `innerPetal-${safeId}`;
  const titleId = `title-${safeId}`;

  if (iconOnly) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-150 -150 300 300"
        className={`w-10 h-10 hover:scale-105 transition-transform duration-300 ${className}`}
        fill="none"
        role="img"
        aria-label="Whispering Pines Resort Crest"
      >
        <defs>
          <linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFF0BE" />
            <stop offset=".35" stopColor="#E5C36B" />
            <stop offset=".65" stopColor="#B78B28" />
            <stop offset="1" stopColor="#F8E3A3" />
          </linearGradient>

          <path
            id={petalId}
            d="M0,0 C-61,-32 -62,-90 0,-137 C62,-90 61,-32 0,0Z"
          />
          <path
            id={innerPetalId}
            d="M0,0 C-30,-20 -30,-52 0,-77 C30,-52 30,-20 0,0Z"
          />
        </defs>

        <g
          fill="none"
          stroke={`url(#${goldId})`}
          strokeWidth="8"
          strokeLinejoin="round"
        >
          <use href={`#${petalId}`} />
          <use href={`#${petalId}`} transform="rotate(90)" />
          <use href={`#${petalId}`} transform="rotate(180)" />
          <use href={`#${petalId}`} transform="rotate(270)" />

          <g strokeWidth="6">
            <use href={`#${innerPetalId}`} />
            <use href={`#${innerPetalId}`} transform="rotate(90)" />
            <use href={`#${innerPetalId}`} transform="rotate(180)" />
            <use href={`#${innerPetalId}`} transform="rotate(270)" />
          </g>
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 300"
      className={`h-9 sm:h-10 md:h-11 lg:h-12 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[290px] select-none hover:opacity-95 transition-opacity duration-300 ${className}`}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>Whispering Pines Resort by Casa De Bello — Ramgarh</title>

      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF0BE" />
          <stop offset=".35" stopColor="#E5C36B" />
          <stop offset=".65" stopColor="#B78B28" />
          <stop offset="1" stopColor="#F8E3A3" />
        </linearGradient>

        <path
          id={petalId}
          d="M0,0 C-61,-32 -62,-90 0,-137 C62,-90 61,-32 0,0Z"
        />
        <path
          id={innerPetalId}
          d="M0,0 C-30,-20 -30,-52 0,-77 C30,-52 30,-20 0,0Z"
        />
      </defs>

      {/* Transparent background; intended for dark backgrounds */}

      <g
        transform="translate(140 150) scale(.82)"
        fill="none"
        stroke={`url(#${goldId})`}
        strokeWidth="8"
        strokeLinejoin="round"
      >
        <use href={`#${petalId}`} />
        <use href={`#${petalId}`} transform="rotate(90)" />
        <use href={`#${petalId}`} transform="rotate(180)" />
        <use href={`#${petalId}`} transform="rotate(270)" />

        <g strokeWidth="6">
          <use href={`#${innerPetalId}`} />
          <use href={`#${innerPetalId}`} transform="rotate(90)" />
          <use href={`#${innerPetalId}`} transform="rotate(180)" />
          <use href={`#${innerPetalId}`} transform="rotate(270)" />
        </g>
      </g>

      <path
        d="M285,45 V255"
        stroke={`url(#${goldId})`}
        strokeWidth="2"
      />

      <g
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        <text
          x="745"
          y="68"
          fill="#FFF9E9"
          fontSize="25"
          letterSpacing="4"
        >
          WHISPERING PINES RESORT
        </text>

        <text
          x="745"
          y="106"
          fill="#E8CB80"
          fontSize="23"
          fontStyle="italic"
        >
          by
        </text>

        {/* Dominant brand */}
        <text
          x="745"
          y="184"
          fill={`url(#${goldId})`}
          fontSize="78"
          fontWeight="bold"
          letterSpacing="3"
        >
          CASA DE BELLO
        </text>

        <path
          d="M510,214 H980"
          fill="none"
          stroke={`url(#${goldId})`}
          strokeWidth="1.5"
        />

        <text
          x="749"
          y="252"
          fill="#FFF9E9"
          fontSize="18"
          letterSpacing="8"
        >
          RAMGARH
        </text>
      </g>
    </svg>
  );
}
