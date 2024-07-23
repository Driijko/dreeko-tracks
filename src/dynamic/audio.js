import { writable } from "svelte/store";

// STATE /////////////////////////////////////
export const currentTrackPlaylistIndex = writable(0);
export const audioPlaying = writable(false);