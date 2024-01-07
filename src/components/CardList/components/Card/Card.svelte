<script lang="ts">
  import { ICoffeeCard } from 'api/getCoffeeCard/types';

  import './styles.less';

  export let loading: boolean = false;
  export let card: ICoffeeCard | undefined = undefined;
</script>

<article class="card" class:loading>
  <div class="card__image" class:loading>
    {#if card?.imageUrl}
      <img src={card?.imageUrl} alt={card?.blend_name} />
    {/if}
  </div>
  <div class="card__info">
    <p class="card__origin" class:loading title={card?.origin ?? ''}>
      {card?.origin ?? ''}
    </p>
    <h2 class="card__name" class:loading title={card?.blend_name ?? ''}>
      {card?.blend_name ?? ''}
    </h2>
    <div class="card__notes" class:loading>
      <div class="card__notes-wrapper">
        {#if card}
          {#each card.notes as note}
            <span class="card__note">{note}</span>
          {/each}
        {:else}
          <div class="card__note" class:loading></div>
          <div class="card__note" class:loading></div>
        {/if}
      </div>
    </div>
    <p class="card__variety" class:loading>
      {#if card}
        variety:
        <span>{card.variety}</span>
      {/if}
    </p>
    <p class="card__intensifier" class:loading>
      {#if card}
        intensifier:
        <span>{card.intensifier}</span>
      {/if}
    </p>
  </div>
</article>
