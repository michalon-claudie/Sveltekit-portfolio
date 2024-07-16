<script lang="ts">
    export let hello:string='';
    let elemCarousel: HTMLDivElement;
	import slide1 from '$lib/assets/alliMobile.webp'
	import slide2 from '$lib/assets/alligator.webp'
	import slide3 from '$lib/assets/bg-blue.jpg'
    import CardCitation from '$lib/components/CardCitation.svelte';
	const slides = [ slide1, slide2, slide3];
	import cardCitationNumberOne from '$lib/assets/alligator.webp'
	import Cards from '$lib/components/Cards.svelte'
	import Paragraph from '$lib/components/Paragraph.svelte';
    import { onDestroy, onMount } from 'svelte';
	export let data;
	
        
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

	let currentPage = 1;
    const itemsPerPage = 3;
	$: totalPages = Math.ceil(data.projects.length / itemsPerPage);

    // Get the projects for the current page
    $: paginatedProjects = data.projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
        }
    }

</script>

<div class="flex gap-4">
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto w-full h-60">
		{#each slides as img}
			<Cards pictureSlide={img}/>
		{/each}
	</div>
</div>
	<Paragraph titleParagraph='Enchanté et Bienvenue sur mon portfolio !' contentParagraph="Après plusieurs années dans le domaine de la santé, j'ai ressenti le besoin de changer.
Suite à de multiples recherches et beaucoup d'apprentissage en autodidacte, j'ai décidé de m'orienter dans le développement web, en particulier dans le domaine du Frontend.
Chaque jour, je continues mon apprentissage et je me suis lancée le defi de me former au Back-end. Je suis animée par la volonté de créer des expériences numériques convaincantes et accessibles, tout en veillant à ce qu'elles respectent les normes éthiques et environnementales. Mon parcours atypique m'a apporté une perspective unique, alliant sensibilité humaine et expertise technique."/>

<div class="flex flex-row gap-4">
	<CardCitation pictureSlide={cardCitationNumberOne}/>
</div>
<section>
	<h1 class="h3 text-center my-10">Mes projets</h1>
    <div class="flex flex-col gap-4 my-8">
        {#each paginatedProjects as project (project.id)}
            <div class="p-8">
                <img src={project.cover} alt={project.title} class="object-cover w-full h-52"/>
                <h2>{project.title}</h2>
            </div>
        {/each}
    </div>
	<div class="pagination flex justify-center my-4">
        <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1} class="mx-1">
            Précédent
        </button>
        
        {#each Array(totalPages) as _, i}
            <button on:click={() => goToPage(i + 1)} class="{currentPage === (i + 1) ? 'active' : ''} mx-1">
                {i + 1}
            </button>
        {/each}
        
        <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} class="mx-1">
            Suivant
        </button>
    </div>
</section>


