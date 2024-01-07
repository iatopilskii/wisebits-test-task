<script lang="ts">
  import cardStore from 'stores/cards';
  import addNewCard from 'helpers/addNewCard';

  import './styles.less';

  const handleClick = () => {
    addNewCard();
  };
</script>

<div class="button__wrapper">
  <button
    class="button"
    on:click={handleClick}
    disabled={$cardStore.isLoading}
  />
  <span class="button__hint">Load more</span>
</div>
