<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioPlaying, togglePausePlay } from "../../dynamic/audio";
  import playlist from "../../static/playlist";
  import {ctpi} from "../../dynamic/audio";

  const {color1, color2} = playlist[$ctpi].colors;

  // ANIMATION ------------------------------------
  let animation;

  onMount(()=> {
    animation = (audioPlaying, duration) => {
      if (audioPlaying) {
        gsap.to(".pause-play-button path:nth-of-type(1)", {
          duration: duration,
          attr: {
            d: "M 25,20 L 45,20 L 45,80 L 25,80 Z",
          },
        });
        gsap.to(".pause-play-button path:nth-of-type(2)", {
          duration: duration,
          attr: {
            d: "M 55,20 L 75,20 L 75,80 L 55,80 Z",
          }
        });
      }
      else if (audioPlaying === false) {
        gsap.to(".pause-play-button path:nth-of-type(1)", {
          duration: duration,
          attr: {
            d: "M 20,20 L 51,35.5 L 51,64.5 L 20,80 Z",
          },
        });
        gsap.to(".pause-play-button path:nth-of-type(2)", {
          duration: duration,
          attr: {
            d: "M 50,35 L 80,50 L 80,50 L 50,65 Z",
          }
        });
      }
    }

    // REACTIVE ON MOUNT --------------------------------------
    animation($audioPlaying, 0);
  });

  // REACTIVE --------------------------------------
  $: if (animation) {
    animation($audioPlaying, 0.5);
  };

  // EVENT HANDLERS -----------------------------------------
  function handleClick(e) {
    togglePausePlay();
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<button class="pause-play-button" type="button" on:click={handleClick}
  style:border-color={color2} style:color={color2} style:background-color={color1}
>
  <svg viewBox="0 0 100 100">
    <path/>
    <path/>
  </svg>
</button>

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
button {
  width: 60px;
  height: 60px;
  border-width: 3.5px;
  border-style: solid;
  border-radius: 10%;
}
svg {
  width: 100%; 
  height: 100%;
}
</style>