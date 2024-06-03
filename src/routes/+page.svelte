<script lang="ts">
    export let hello:string='';
    let elemCarousel: HTMLDivElement;
	import slide1 from '$lib/assets/alliMobile.webp'
	import slide2 from '$lib/assets/alligator.webp'
	import slide3 from '$lib/assets/bg-blue.jpg'
	const slides = [ slide1, slide2, slide3];
	import Cards from '$lib/components/Cards.svelte'

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount 
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; 
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; 
		elemCarousel.scroll(x, 0);
	}
</script>
<h1 class="text-3xl">Welcome to SvelteKit</h1>
<p>Visit {hello} <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each slides as img}
			<Cards pictureSlide={img}/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>

