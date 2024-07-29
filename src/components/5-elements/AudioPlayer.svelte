<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioPaused, currentTrack, volume, currentTime, totalTime } 
  from "../../dynamic/audio";

  // ELEMENT REFERENCE --------------------------------------
  let audioElement;

  // REACTIVE -------------------------------------------
  $: if (audioElement) {
    audioElement.volume = $volume;
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<audio controls bind:this={audioElement} bind:paused={$audioPaused}
  src={$currentTrack.path} bind:currentTime={$currentTime}
>

</audio>

<!-- STYLES //////////////////////////////////////////////// -->