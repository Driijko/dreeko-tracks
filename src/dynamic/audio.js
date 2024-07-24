import { writable, get } from "svelte/store";

// STATE /////////////////////////////////////
export const ctpi = writable(0); // current track playlist index
export const audioPlaying = writable(false);

// FUNCTIONS /////////////////////////////////////////
export function togglePausePlay() {
  audioPlaying.set(!(get(audioPlaying)));
};