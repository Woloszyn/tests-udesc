<template>
  <div id="visor">
      <div class="group-visor">
          <input disabled type="text" maxlength="17" :value="valorTotal" class="visor">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        "valorTotal": {type:String}
    },

}
</script>

<style>
    #visor {
        position:fixed;
        left: 20%;
        width: 40%;
    }
    .group-visor{
        width: 100%;
    }

    .visor{
        width: 100%;
        height: 80px;
        background: white;
        border: solid black 1px;
        font-size: 60px;
    }

</style>