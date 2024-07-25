<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { volume, adjustVolume } from "../../dynamic/audio";
  import playlist from "../../static/playlist";
  import { ctpi } from "../../dynamic/audio";

  const {color1, color2} = playlist[$ctpi].colors;

  // EVENT HANDLERS ----------------------------------
  function handleInput(e) {
    adjustVolume(e.target.value);
  }

</script>

<!-- MARKUP /////////////////////////////////////// -->
<input type="range" class="audio-bkg-volume-slider"
  min="0.00" max="1.00" step="0.01" 
  value="{$volume}" on:input={handleInput} 
  style:border-color={"white"}
/>

<!-- STYLES //////////////////////////////////////// -->
<style>
input[type="range"] {
  width: 200px;
  height: 30px;
  /* padding: 10px; */
  transform-origin: 50% 50%;
  transform: rotate(270deg);
  /* position: absolute; */
  /* top: 53%;
  left: 10%; */
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
  /* border-color: black; */
  border-width: 5px;
  height: 80%;
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
  margin-top: -12px; 
}
/* input[type="range"]::-moz-range-thumb {
  background-color: grey;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
} */
</style>