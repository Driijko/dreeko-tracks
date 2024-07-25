import {writable, get} from "svelte/store";

export const volumeLayer = writable(false);

export function toggleVolumeLayer() {
  volumeLayer.set(!(get(volumeLayer)));
};