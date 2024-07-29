import { writable, get } from "svelte/store";

// STATE /////////////////////////////////////
export const ctpi = writable(0); // current track playlist index
export const audioPaused = writable(true);
export const volume = writable(0);
export const currentTime = writable(0);
export const totalTime = writable(0);
export const currentTrack = writable({
  name: "Buttercup",
  path: "./audio/buttercup.mp3",
});

// FUNCTIONS /////////////////////////////////////////
export function togglePausePlay() {
  audioPaused.set(!(get(audioPaused)));
};

export function adjustVolume(newVolume) {
  volume.set(newVolume);
};