/**
 * useResponsiveCols — returns column count based on breakpoints.
 *
 * Used by the virtualised ComponentGrid to know how many cards per row.
 */

import { useEffect, useState } from "react";

interface Breakpoints {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  "2xl"?: number;
}

const BREAKPOINT_PX: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useResponsiveCols(bp: Breakpoints): number {
  const [cols, setCols] = useState(() => calcCols(bp));

  useEffect(() => {
    const handler = () => setCols(calcCols(bp));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [bp]);

  return cols;
}

function calcCols(bp: Breakpoints): number {
  const w = typeof window !== "undefined" ? window.innerWidth : 1024;
  let result = bp.base;

  for (const key of ["sm", "md", "lg", "xl", "2xl"] as const) {
    if (bp[key] !== undefined && w >= BREAKPOINT_PX[key]) {
      result = bp[key]!;
    }
  }

  return result;
}
