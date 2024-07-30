<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import {totalTime, currentTime, setCurrentTime} from "../../dynamic/audio";

  // EVENT HANDLERS -------------------------------------
  function handleInput(e) {
    setCurrentTime(e.target.value);
  };

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<input type="range" min="0" max={$totalTime} step="0.01" bind:value={$currentTime} 
  on:input={handleInput}
/>

<!-- STYLES //////////////////////////////////////////////////// -->
<style>
input[type="range"] {
  width: 75%
}
input[type="range"]::-webkit-slider-runnable-track {
  background-color: black;
  height: 13px;
  border-radius: 50px;
  padding-left: 2px;
  padding-right: 2px;
}
input[type="range"]::-moz-range-track { 
  background-color: black;;
  border-style:solid;
  border-color: white;
  border-width: 0px;
  height: 20px;
  border-radius: 50px;
}
input[type="range"]::-webkit-slider-thumb {
  background-color: hsl(0, 100%, 100%); 
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-top: 1.4%; 
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