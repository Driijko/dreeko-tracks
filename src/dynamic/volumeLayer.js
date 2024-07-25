import {writable, get} from "svelte/store";

export const volumeLayer = writable(true);

export function toggleVolumeLayer() {
  volumeLayer.set(!(get(volumeLayer)));
};