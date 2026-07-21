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
        viewBox="0 0 100 100"
        className="w-10 h-10 hover:scale-105 transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients to replicate the elegant golden metallic sheen */}
        <defs>
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

          {/* Subtle 3D Bevel and Emboss Filter */}
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
        </defs>

        <g filter="url(#bevel)">
          {/* 1. OUTER FLOWER PERIMETER (Four almond shaped petals) */}
          <path
            d="M 50 4 
               Q 30 27, 50 50 
               Q 70 27, 50 4 Z 
               M 50 96 
               Q 70 73, 50 50 
               Q 30 73, 50 96 Z
               M 4 50 
               Q 27 30, 50 50 
               Q 27 70, 4 50 Z
               M 96 50 
               Q 73 70, 50 50 
               Q 73 30, 96 50 Z"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
          />

          {/* 2. INNER CORE (Smaller 4-petal star) */}
          <path
            d="M 50 20 
               Q 40 35, 50 50 
               Q 60 35, 50 20 Z 
               M 50 80 
               Q 60 65, 50 50 
               Q 40 65, 50 80 Z
               M 20 50 
               Q 35 40, 50 50 
               Q 35 60, 20 50 Z
               M 80 50 
               Q 65 60, 50 50 
               Q 65 40, 80 50 Z"
             stroke="url(#goldGradientLight)"
             strokeWidth="2"
             fill="url(#goldGradient)"
             fillOpacity="0.4"
             strokeLinejoin="round"
          />

          {/* 3. BISECTING LINES FROM CENTER */}
          <path
            d="M 50 4 L 50 96 M 4 50 L 96 50"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            fill="none"
          />
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
