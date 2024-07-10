import { setBreakpoint } from "../../dynamic/breakpoint";
import updateOnResize from "./updateOnResize";

export default function viewportSetup() {
  setBreakpoint();
  updateOnResize();
};