<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioPaused, currentTrack } from "../../dynamic/audio";

  // ELEMENT REFERENCE --------------------------------------
  let audioElement;

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<audio controls bind:this={audioElement} bind:paused={$audioPaused}
  src={$currentTrack.path}
>

</audio>

<!-- STYLES //////////////////////////////////////////////// -->