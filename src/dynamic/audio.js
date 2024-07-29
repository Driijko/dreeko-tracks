import { writable, get } from "svelte/store";

// STATE /////////////////////////////////////
export const ctpi = writable(0); // current track playlist index
export const audioPaused = writable(false);
export const volume = writable(0);

// FUNCTIONS /////////////////////////////////////////
export function togglePausePlay() {
  audioPaused.set(!(get(audioPaused)));
};

export function adjustVolume(newVolume) {
  volume.set(newVolume);
};