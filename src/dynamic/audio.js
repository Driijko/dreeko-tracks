import { writable } from "svelte/store";

// STATE /////////////////////////////////////
export const ctpi = writable(0); // current track playlist index
export const audioPlaying = writable(false);