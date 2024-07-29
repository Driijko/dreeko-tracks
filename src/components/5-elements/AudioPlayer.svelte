<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioPaused, currentTrack, volume } from "../../dynamic/audio";

  // ELEMENT REFERENCE --------------------------------------
  let audioElement;

  // REACTIVE -------------------------------------------
  $: if (audioElement) {
    audioElement.volume = $volume;
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<audio controls bind:this={audioElement} bind:paused={$audioPaused}
  src={$currentTrack.path}
>

</audio>

<!-- STYLES //////////////////////////////////////////////// -->