import { derived } from "svelte/store";
import { ctpi } from "./audio";
import playlist from "../static/playlist";

export const colors = derived(
  ctpi,
  ($ctpi)=> playlist[$ctpi].colors
);