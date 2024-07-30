<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  import Timer from "../5-elements/Timer.svelte";
  import SeekSlider from "../5-elements/SeekSlider.svelte";

</script>

<!-- MARKUP //////////////////////////////////////// -->
<div class="center container">
  <Timer />
  <SeekSlider />
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  width: 60%;
  left: 20%;
  height: 100%;
  border: 1px solid blue;
}
</style>