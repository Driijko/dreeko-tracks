<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentTime, totalTime} 
  from "../../dynamic/audio"
  
</script>

<!-- MARKUP //////////////////////////////////// -->
<!-- {#if $totalTime > 0} -->
<div class="timer">
  <span>
    {Math.floor($currentTime / 60)}:{
    Math.floor($currentTime % 60) < 10 ? 
    `0${Math.floor($currentTime % 60)}`
    : Math.floor($currentTime % 60)}
  </span>
  <span> / </span>
  <span>
    {Math.floor($totalTime / 60)}:{
      Math.floor($totalTime % 60) < 10 ? 
      `0${Math.floor($totalTime % 60)}`
      : Math.floor($totalTime % 60)}
  </span>
</div>
<!-- {/if} -->