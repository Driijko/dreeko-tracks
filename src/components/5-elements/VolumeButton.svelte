<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import { colors } from "../../dynamic/colors";
  import { volume } from "../../dynamic/audio";
  import { volumeLayer, toggleVolumeLayer } from "../../dynamic/volumeLayer";
  import VolumeOffIcon from "../6-icons/VolumeOffIcon.svelte";
  import VolumeLowIcon from "../6-icons/VolumeLowIcon.svelte";
  import VolumeHighIcon from "../6-icons/VolumeHighIcon.svelte";


  // EVENT HANDLERS -------------------------------------
  function handleClick(e) {
    toggleVolumeLayer();
  };

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<button
  style:background-color={$colors.color1}
  style:border-color={$colors.color2}
  style:outline-color={$colors.color2T3}
  class:layer-open={$volumeLayer}
  on:click={handleClick}
  class:volume-off={$volume < 0.03}
  class:volume-low={$volume >= 0.03 && $volume < 0.6}
  class:volume-high={$volume >= 0.6}
>
  {#if $volume < 0.03}
    <VolumeOffIcon/>
  {:else if $volume >= 0.03 && $volume < 0.6}
    <VolumeLowIcon/>
  {:else if $volume >= 0.6}
    <VolumeHighIcon/>
  {/if}
</button>

<!-- STYLES ////////////////////////////////////// -->
<style>
button {
  width: 60px;
  height: 60px;
  border-radius: 10%;
  border-width: 3.5px;
  border-style: solid;
  outline-width: 0;
  outline-style: solid;
  transition: outline-width 0.5s linear;
  z-index: 2;
  position: absolute;
  right: 5px;
}
.layer-open {
  outline-width: 150dvh;
}
button :global(svg) {
  width: 100%;
  height: 100%;
}
button.volume-off {
  padding: 10px;
}
button.volume-low {
  padding: 10px;
  padding-right: 15px;
}
button.volume-high {
  padding: 7px;
}
</style>