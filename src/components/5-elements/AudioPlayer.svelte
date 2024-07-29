<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioPaused } from "../../dynamic/audio";

  // ELEMENT REFERENCE --------------------------------------
  let audioElement;

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<audio controls bind:this={audioElement} bind:paused={$audioPaused}
  
>

</audio>

<!-- STYLES //////////////////////////////////////////////// -->