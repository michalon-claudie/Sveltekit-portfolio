<!-- Loader.svelte -->
<script>
  export let isLoading = false;
  export let loadingDisappear = false;
</script>
  
  {#if isLoading || loadingDisappear}
    <div class="loader-overlay">
      <div class="band band-vertical"></div>
      <div class="band band-horizontal"></div>
    </div>
  {/if}
  
<style>
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transition: opacity 0.5s ease;
    opacity:1;
  }
  .loader-overlay.fade-out {
  opacity: 0;
  }
  .band {
    position: absolute;
    background: linear-gradient(#12c2e9,#c471ed)
  }
  .band-vertical {
    width: 7px;
    height: 0;
    top: 0;
    left: 10%;
    animation: growVertical 3s forwards;
  }
  .band-horizontal {
    width: 0;
    height: 10px;
    top: 80%;
    left: 0;
    animation: growHorizontal 2s forwards; 
  }
  @keyframes growVertical {
    to {
      height: 100%;
    }
  }
  @keyframes growHorizontal {
    to {
      width: 90%;
    }
  }
  </style>
  