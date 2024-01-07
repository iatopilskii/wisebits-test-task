<script lang="ts">
  import { onMount } from 'svelte';

  import addNewCard from 'helpers/addNewCard';

  import Button from 'components/Button/Button.svelte';
  import CardList from 'components/CardList/CardList.svelte';

  onMount(() => {
    addNewCard();
  });
</script>

<main class="app">
  <CardList />
  <Button />
</main>
