<!-- SCRIPTS /////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import playlist from "../../static/playlist";
  import { ctpi, setCtpi } from "../../dynamic/audio";
  import { colors } from "../../dynamic/colors";

  const {color1, color1D, color2T2, color2, color2D, color2T} = playlist[$ctpi].colors;

  // PROPS ---------------------------------------
  export let number;

  const colorScheme1 = [
    playlist[number].colors.color1, 
    playlist[number].colors.color1D
  ];
  const colorScheme2 = [
    playlist[number].colors.color2,
    playlist[number].colors.color2D
  ];

  // EVENT HANDLERS ----------------------------------
  function handleClick(e) {
    setCtpi(number);
    console.log($colors);
  };

</script>

<!-- MARKUP ///////////////////////////// -->
<li style:border-color={color1D}
  style:background-color={$ctpi === number ? color2T : color2T2}
  style:color={$ctpi === number ? color1 : color1D}
>
  <button on:click={handleClick}>
    <span class="number center" style:background-color={color2}
    style:border-color={$ctpi === number ? color1 : color1D}
    >
      {number}.
    </span>
    <span class="name">
      {playlist[number].name}
    </span>
    <span class="colors"
      style:border-color={number === $ctpi ? colorScheme1[0] : colorScheme1[1]}
      style:background-color={number === $ctpi ? colorScheme2[0] : colorScheme2[1]}
    >
    </span>
  </button>
</li>

<!-- STYLES /////////////////////////// -->
<style>
li {
  margin-top: 10px;
  height: 50px;
}
button {
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
}
.number {
  border-width: 2px;
  border-style: solid;
  height: 100%;
  width: 10%;
  min-width: 43px;
  font-size: 25px;
  padding: 6px;
  border-radius: 5px;
  font-family: "Limelight";
}
.name {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 20px;
  letter-spacing: 1px;
  word-spacing: 3px;
  font-family: "Limelight";
}
.colors {
  width: 5%;
  min-width: 23px;
  height: 60%;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 5px;
  border-radius: 10%;
}
</style>