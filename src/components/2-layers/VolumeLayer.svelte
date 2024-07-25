<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { volumeLayer } from "../../dynamic/volumeLayer";
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import VolumeSlider from "../5-elements/VolumeSlider.svelte";

  const {color1, color2} = playlist[$ctpi].colors;

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div class="vp-layer center layer"
  style:pointer-events={$volumeLayer ? "initial" : "none"}
>
  <div class="container"
    style:opacity={ $volumeLayer ? 1 : 0}
    style:transition-delay={$volumeLayer ? "0.2s": "0s"}
  >
    <div class="message" style:color={color1}>ADJUST AUDIO VOLUME</div>
    <VolumeSlider />
  </div>
</div>

<!-- STYLES ////////////////////////////////// -->
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 25dvh;
  gap: 120px;
  z-index: 3;
  width: 80%;
  max-width: 600px;
  height: 70%;
  max-height: 700px;
  transition-timing-function: linear;
  transition-duration: 0.3s;
  transition-property: opacity;
}
.message {
  font-family: "Julius Sans One", sans-serif;
  background-color: black;

}
</style>
