<script lang="ts">
    export let titleParagraph=''
    export let contentParagraph=''
</script>
<div class="cardMobile mx-4 lg:card p-10">
    <h2 class="h2 lg: my-4">{titleParagraph}</h2>
    <p class="h4 lg: py-8">{@html contentParagraph.replace(/\n/g, '<br>')}</p>
</div>

<style>
     .cardMobile {
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(10px); 
        border-radius: 10px; 
        margin-top: 80px;
        margin-bottom:80px;
    }
    .card {
        background: rgba(255, 255, 255, 0.1); /* Background semi-transparent */
        backdrop-filter: blur(10px); /* Flou */
        border-radius: 10px; /* Coins arrondis */
        margin-left: 9rem; /* 144px */
        margin-right: 9rem;
        margin-top: 20px;
        margin-bottom:20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre pour l'effet de carte */
    }
</style>