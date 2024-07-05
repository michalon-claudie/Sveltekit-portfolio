<script lang="ts">
    export let pictureSlide=""
    import { onMount } from 'svelte';

    let message = '';
    const originalMessage = "Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez. - Jeff Atwood.";
    
    onMount(() => {
        let index = 0;
        const intervalId = setInterval(() => {
        message = originalMessage.slice(0, index);
        index++;

        if (index > originalMessage.length) {
            clearInterval(intervalId);
        }
        }, 150);

        return () => {
        clearInterval(intervalId);
        };
    });

</script>

<div class="w-full h-1/4 flex justify-center card">
    <img src={pictureSlide} alt="slideCarousel" class="w-9/12 object-cover rounded-xl my-8">
    <h3 class="absolute top-1/2 h3 text-center specialTitle">{message}</h3>
</div>

<style>
    .card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px); 
        border-radius: 10px; 
        margin-top: 20px;
        margin-bottom:20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        position:relative;
    }
    .specialTitle{
        max-width:75%;
    }
</style>