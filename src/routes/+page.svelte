<script lang="ts">
    export let hello:string='';
    let elemCarousel: HTMLDivElement;
	import slide1 from '$lib/assets/alliMobile.webp'
	import slide2 from '$lib/assets/alligator.webp'
	import slide3 from '$lib/assets/bg-blue.jpg'
	const slides = [ slide1, slide2, slide3];
	import Cards from '$lib/components/Cards.svelte'
	import Paragraph from '$lib/components/Paragraph.svelte';
    import { onDestroy, onMount } from 'svelte';

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; 
		elemCarousel.scroll(x, 0);
	}
	let carouselInterval :number;
	function startAutoCarousel(){
		carouselInterval=setInterval(carouselRight, 5000)
	}
	function stopAutoCarousel(){
		clearInterval(carouselInterval)
	}
	onMount(()=>{
		startAutoCarousel()
	})
	onDestroy(()=>{
		stopAutoCarousel()
	})
</script>
<div class="flex gap-4 items-center">
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each slides as img}
			<Cards pictureSlide={img}/>
		{/each}
	</div>
</div>
<div>
	<Paragraph titleParagraph='Bienvenue sur mon site' contentParagraph='Bienvenue sur mon site, je suis Claudie, devellopeuse web.'/>
</div>
<section class="flex flex-row gap-4">
	{#each slides as img}
		<Cards pictureSlide={img}/>
	{/each}
</section>


