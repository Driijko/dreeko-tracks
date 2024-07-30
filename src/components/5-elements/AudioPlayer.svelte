<!-- SCRIPTS //////////////////////////////////////////// -->
<script>

  // IMPORTS ------------------------------------------
  import { onMount } from "svelte";
  import { audioPaused, currentTrack, volume, currentTime, setTotalTime } 
  from "../../dynamic/audio";

  // ELEMENT REFERENCE --------------------------------------
  let audioElement;


  // EVENT HANDLERS -------------------------------------
  function handleLoadedData(e) {
    setTotalTime(e.target.duration);
    if (!$audioPaused) {
      e.target.play();
    }
  };

  // EVENT HANDLERS -----------------------------------
  onMount(()=> {
    audioElement.addEventListener("loadeddata", handleLoadedData);

    return ()=> {
      audioElement.removeEventListener("loadeddata", handleLoadedData);
    };
  });

  // REACTIVE -------------------------------------------
  $: if (audioElement) {
    audioElement.volume = $volume;
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<audio bind:this={audioElement} bind:paused={$audioPaused}
  src={$currentTrack.path} bind:currentTime={$currentTime}
>

</audio>

<!-- STYLES //////////////////////////////////////////////// -->