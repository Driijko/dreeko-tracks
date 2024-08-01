<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { volume, adjustVolume } from "../../dynamic/audio";

  // EVENT HANDLERS ----------------------------------
  function handleInput(e) {
    adjustVolume(e.target.value);
  }

</script>

<!-- MARKUP /////////////////////////////////////// -->
<input type="range" class="audio-bkg-volume-slider"
  min="0.00" max="1.00" step="0.01" 
  bind:value="{$volume}" on:input={handleInput} 
  style:border-color={"white"}
/>

<!-- STYLES //////////////////////////////////////// -->
<style>
input[type="range"] {
  width: 200px;
  height: 30px;
  transform-origin: 50% 50%;
  transform: rotate(270deg);
}
input[type="range"]::-webkit-slider-runnable-track {
  background-color: transparent;
  border-style: solid;
  border-color: white;
  border-width: 5px;
  height: 80%;
  border-radius: 50px;
}
input[type="range"]::-moz-range-track { 
  background-color: transparent;
  border-style:solid;
  border-color: white;
  border-width: 5px;
  height: 20px;
  border-radius: 50px;
}
input[type="range"]::-webkit-slider-thumb {
  background-color: white; 
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-top: -12.6px; 
}
input[type="range"]::-moz-range-thumb {
  background-color: white;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  margin-top: 5px; 
}
</style>