import "intersection-observer";

const { TextEncoder } = require("text-encoding");

global.TextEncoder = TextEncoder;

Object.defineProperty(window, "matchMedia", {
  value: jest.fn().mockImplementation((query) => ({
    matches: query.includes("dark"),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});
