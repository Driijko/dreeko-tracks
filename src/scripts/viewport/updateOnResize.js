import { setBreakpoint } from "../../dynamic/breakpoint";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    setBreakpoint();
  });
};