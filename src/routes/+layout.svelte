<script lang="ts">
    import "../app.css";
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';	
    import Loader from '$lib/components/Loader.svelte';
    let isLoading = true;
    setTimeout(() => {
    isLoading = false;
  }, 7000);		
</script>

{#if isLoading}
  <Loader {isLoading} />
{:else}
<AppShell class="bg-bg bg-cover text-white">
  <svelte:fragment slot="header">
    <AppBar class="text-black">
      <nav>
        <ol class="flex flex-row gap-4 justify-center">
          <li>
            Acceuil
          </li>
          <li>
            A propos
          </li>
          <li>
            Projets
          </li>
          <li>
            CV
          </li>
          <li>
            Contact
          </li>
        </ol>
      </nav>
    </AppBar>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="pageFooter">
  <footer class="bg-black flex flex-col items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
    <p>GitHub</p>
    <p>linkdin</p>
    <p>numero de telephone</p>
    <p>Michalon Claudie Copyright 2024</p>
    <p>Mon autre site avec React</p>
  </footer>
</svelte:fragment>
</AppShell>
{/if}
