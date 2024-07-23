<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------------
  import { onMount } from "svelte";

  // STATE --------------------------------------------
  let fade = false;

  // EVENT HANDLERS --------------------------
  function handleLoad(e) {
    fade = true;
  };

  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", handleLoad);
    
    return ()=> {
      window.removeEventListener("load", handleLoad);
    };
  });
  
</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<div class="loading-page vp" class:fade>
  <div class="logo">
    DREEKO<br/>
    TRACKS
  </div>
  <div class="loading">
    <div></div>
    <div></div>
    <p>Loading...</p>
  </div>
</div>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
  .loading-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsl(150, 100%, 50%);
    transition: opacity 4s ease-out;
  }
  .loading-page > div {
    width: 100%;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Playwrite FR Trad", cursive;
    line-height: 3;
    font-size: 1vw;
    color: hsl(40, 100%, 80%);
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 2s ease-out;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
  }
  .fade {
    opacity: 0;
  }
  p {
    z-index: 1;
  }
  .loading > div {
    position: absolute;
    border-radius: 50%;
    border-style: solid;
  }
  @keyframes rotate1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @keyframes rotate2 {
    from {transform: rotate(0deg);}
    to {transform: rotate(-360deg);}
  }
  .loading div:nth-of-type(1) {
    animation: rotate1 4s ease-in-out infinite;
  }
  .loading div:nth-of-type(2) {
    animation: rotate2 4s ease-in-out infinite;
  }
  /* PORTRAIT -------------------------------- */
  @media screen and (orientation: portrait) {
    .loading-page > div {
      height: 30%;
    }
    .logo {
      font-size: 6vw;
    }
    p {
      font-size: 4vw;
    }
    .loading div {
      width: 25%;
      height: 35%;
      border-width: 1vw;
    }
  }
  /* LANDSCAPE -------------------------------- */
  @media screen and (orientation: landscape) {
    .loading-page > div {
      height: 25%;
    }
    .logo {
      font-size: 2vw;
    }
    p {
      font-size: 1vw;
    }
    .loading div {
      width: 20%;
      height: 10%;
      border-width: 0.3vw;
    }

  }
  </style>