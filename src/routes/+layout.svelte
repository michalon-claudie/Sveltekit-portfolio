<script lang="ts">
    import "../app.css";
    import { AppBar } from '@skeletonlabs/skeleton';
    import { AppShell } from '@skeletonlabs/skeleton';
		import iconC from '$lib/assets/iconC.png'	
    import iconMail from '$lib/assets/mail.png'					
  </script>
  
  <AppShell class="bg-primary-300">
      <svelte:fragment slot="header">
      <AppBar class="bg-gradient-to-b from-secondary-300 to-primary-300">
        <svelte:fragment slot="lead"><img src={iconC} alt="logo"></svelte:fragment>
        Claudie M.
        <svelte:fragment slot="trail"><img src={iconMail} alt="email"></svelte:fragment>
      </AppBar>
    </svelte:fragment>
      <svelte:fragment slot="pageHeader">
        <nav>
          <ol>
            <li>

            </li>
            <li>
              
            </li>
          </ol>
        </nav>
      </svelte:fragment>
      <slot />
      <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
  </AppShell>
