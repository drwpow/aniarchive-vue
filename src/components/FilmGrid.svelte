<script>
  import FilmCard from '../FilmCard.svelte';

  export let films = undefined;
  export let meta = {};

  const skeletonFilms = [...Array.from(new Array(15).keys())];
</script>

<style>
  .filmGrid {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  }
</style>

{#if films}
  <div class="filmGrid">
    {#each films as film}
      <FilmCard
        id={film.id}
        image={film.image.url}
        meta={meta && meta[film.id]}
        releaseYear={film.releaseYear}
        title={film.title}
        titleEN={film.titleEN} />
    {/each}
  </div>
{:else}
  <div class="filmGrid">
    {#each skeletonFilms as film}
      <FilmCard
        releaseYear={1914}
        skeleton
        id="gertie-the-dinosaur"
        image="gertie.jpg"
        title="Gertie the Dinosaur"
        titleEN="Gertie the Dinosaur" />
    {/each}
  </div>
{/if}
