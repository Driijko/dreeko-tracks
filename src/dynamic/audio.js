import { writable, get } from "svelte/store";

// STATE /////////////////////////////////////
export const ctpi = writable(0); // current track playlist index
export const audioPlaying = writable(false);
export const volume = writable(0);

// FUNCTIONS /////////////////////////////////////////
export function togglePausePlay() {
  audioPlaying.set(!(get(audioPlaying)));
};

export function adjustVolume(newVolume) {
  volume.set(newVolume);
};