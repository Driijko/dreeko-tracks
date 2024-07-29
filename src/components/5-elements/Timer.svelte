<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentTime, totalTime} 
  from "../../dynamic/audio"
  
</script>

<!-- MARKUP //////////////////////////////////// -->
<div class="timer center">
  <div>
    {Math.floor($currentTime / 60)}:{
    Math.floor($currentTime % 60) < 10 ? 
    `0${Math.floor($currentTime % 60)}`
    : Math.floor($currentTime % 60)}
  </div>
  <div> / </div>
  <div>
    {Math.floor($totalTime / 60)}:{
      Math.floor($totalTime % 60) < 10 ? 
      `0${Math.floor($totalTime % 60)}`
      : Math.floor($totalTime % 60)}
  </div>
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
.timer {
  font-family: "Leckerli One", cursive;
  gap: 4px;
}
</style>