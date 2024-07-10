import { writable } from "svelte/store";

// STATE ------------------------------------
export const breakpoint = writable("mobile");

// FUNCTIONS ---------------------------------
export function setBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    breakpoint.set("mobile");
  } else {
    breakpoint.set("desktop");
  };
};