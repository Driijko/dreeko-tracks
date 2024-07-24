<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";
  import { volume } from "../../dynamic/audio";
  import { volumeLayer, toggleVolumeLayer } from "../../dynamic/volumeLayer";
  import VolumeOff from "../6-icons/VolumeOff.svelte";

  const {color1, color2, color2T3} = playlist[$ctpi].colors;

  // EVENT HANDLERS -------------------------------------
  function handleClick(e) {
    toggleVolumeLayer();
  };

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<button
  style:background-color={color1}
  style:border-color={color2}
  style:outline-color={color2T3}
  class:layer-open={$volumeLayer}
  on:click={handleClick}
>
  {#if $volume === 0}
    <VolumeOff />
  {/if}
</button>

<!-- STYLES ////////////////////////////////////// -->
<style>
button {
  width: 60px;
  height: 60px;
  padding: 8px;
  border-radius: 10%;
  border-width: 3.5px;
  border-style: solid;
  outline-width: 0;
  outline-style: solid;
  transition: outline-width 1s ease-out;
}
.layer-open {
  outline-width: 150dvh;
}
button :global(svg) {
  width: 100%;
  height: 100%;
}
</style>