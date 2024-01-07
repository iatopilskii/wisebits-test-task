<script lang="ts">
  import { afterUpdate } from 'svelte';

  import cardStore from 'stores/cards';

  import Card from './components/Card/Card.svelte';

  afterUpdate(() => {
    const canScroll = window.innerHeight + window.scrollY < document.body.offsetHeight;

    if (canScroll) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  });
</script>

{#each $cardStore.cards as promise}
  {#await promise}
    <Card loading />
  {:then card}
    <Card {card} />
  {/await}
{/each}
