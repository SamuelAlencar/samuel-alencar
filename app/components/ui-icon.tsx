import type { CSSProperties } from "react";

const paths = {
  arrow: "M7 17 17 7M7 7h10v10",
  down: "M12 4v16m-6-6 6 6 6-6",
  download: "M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5",
  sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  moon: "M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "m6 6 12 12M6 18 18 6",
  mail: "M3 5h18v14H3zM3 5l9 8 9-8",
  copy: "M9 9h12v12H9zM15 6V3H3v12h3",
  check: "m5 12 4 4L19 6",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  code: "m8 5-7 7 7 7m8-14 7 7-7 7M14 3l-4 18",
  plus: "M12 4v16M4 12h16",
  github: "M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-1-3 4 0 7-2 7-6 0-2-1-3-2-4 0-1 0-2-.5-3-2 0-3 1-4 1a12 12 0 0 0-5 0C8 2 7 2 5 2c-.5 1-.5 2-.5 3C3 6 3 7 3 9c0 4 3 6 7 6-1 1-1 2-1 3v4",
};

export function Icon({ name, size = 20, style }: { name: keyof typeof paths; size?: number; style?: CSSProperties }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}><path d={paths[name]} /></svg>;
}
