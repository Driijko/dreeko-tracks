<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioPaused, togglePausePlay, seeking } 
  from "../../dynamic/audio";
  import { colors } from "../../dynamic/colors";

  // ANIMATION ------------------------------------
  let animation;

  onMount(()=> {
    animation = (audioPaused, duration) => {
      if (!audioPaused) {
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
      else if (audioPaused) {
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
    animation($audioPaused, 0);
  });

  // REACTIVE --------------------------------------
  $: if (animation && !$seeking) {
    animation($audioPaused, 0.5);
  };

  // EVENT HANDLERS -----------------------------------------
  function handleClick(e) {
    if (!$seeking) {
      togglePausePlay();
    }
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<button class="pause-play-button" type="button" on:click={handleClick}
  style:border-color={$colors.color2} style:color={$colors.color2} style:background-color={$colors.color1}
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
  position: absolute;
}
svg {
  width: 100%; 
  height: 100%;
}
</style>