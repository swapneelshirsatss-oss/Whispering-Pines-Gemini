import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 text-[#c9a832] ${className}`}>
      {/* High-Fidelity SVG Replication of the Luxury Gold Crest */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-10 h-10 hover:scale-105 transition-transform duration-300"
        fill="none"
      >
        <defs>
          {/* Gold Gradients */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA73" />
            <stop offset="40%" stopColor="#FFF2D4" />
            <stop offset="60%" stopColor="#c9a832" />
            <stop offset="100%" stopColor="#9E7D46" />
          </linearGradient>
          
          <linearGradient id="goldGradientLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c9a832" />
            <stop offset="50%" stopColor="#FFF2D4" />
            <stop offset="100%" stopColor="#A88E62" />
          </linearGradient>

          {/* 3D Bevel & Drop Shadow Filter */}
          <filter id="bevel" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
            <feOffset dx="0.5" dy="0.5" result="offsetGlow" />
            <feSpecularLighting in="blur" surfaceScale="2" specularConstant="0.8" specularExponent="20" lightingColor="#FFF2D4" result="specOut">
              <fePointLight x="-50" y="-50" z="50" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            <feDropShadow in="litPaint" dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.4" />
          </filter>

          {/* Base geometric component (Top Petal Quadrant) */}
          <g id="petal">
            {/* Outer large leaf */}
            <path d="M 100,15 A 50,50 0 0,1 100,100 A 50,50 0 0,1 100,15 Z" />
            
            {/* Inner small leaf */}
            <path d="M 100,55 A 27,27 0 0,1 100,100 A 27,27 0 0,1 100,55 Z" />
            
            {/* Central bisecting line */}
            <line x1="100" y1="15" x2="100" y2="55" />
          </g>
        </defs>

        {/* Rendering the 4 symmetrical quadrants with the Bevel Filter & Gold Stroke */}
        <g filter="url(#bevel)" fill="none" stroke="url(#goldGradient)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          <use href="#petal" />
          <use href="#petal" transform="rotate(90 100 100)" />
          <use href="#petal" transform="rotate(180 100 100)" />
          <use href="#petal" transform="rotate(270 100 100)" />
        </g>
      </svg>

      {/* Typography from Logo */}
      {!iconOnly && (
        <div className="flex flex-col select-none">
          <span className="font-display text-base font-bold tracking-[0.16em] leading-none text-[#FAF9F6]">
            WHISPERING PINES
          </span>
          <span className="text-[9px] font-mono tracking-[0.34em] font-medium text-[#c9a832] uppercase mt-1">
            By Casa De Bello
          </span>
        </div>
      )}
    </div>
  );
}
