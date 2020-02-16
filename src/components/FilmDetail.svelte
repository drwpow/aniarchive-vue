<script>
  import AnimationGrid from '../AnimationGrid.svelte';
  import MetaTable from '../MetaTable.svelte';
  import MetaKey from '../MetaKey.svelte';
  import MetaValue from '../MetaValue.svelte';
  import PersonLink from '../PersonLink.svelte';
  import SkeletonImg from '../SkeletonImg.svelte';
  import SkeletonText from '../SkeletonText.svelte';
  import StudioLink from '../StudioLink.svelte';

  // props
  export let film;
</script>

<style>
  .filmDetail {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 12rem auto;
  }

  .filmDetail-animations {
    margin-block-start: 3rem;
  }

  .filmDetail-img {
    max-width: 100%;
    width: 100%;
  }

  .filmDetail-title {
    font-size: var(--u4);
    font-weight: 300;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  .filmDetail-subtitle {
    font-size: var(--u3);
    margin-block-end: 1rem;
    margin-block-start: 1rem;
  }
</style>

{#if film}
  <div class="filmDetail">
    <img class="filmDetail-img" src={film.image.url} alt={film.title} width="400" />
    <div class="filmDetail-details">
      <h1 class="filmDetail-title">
        {film.title}
        <br />
        {film.titleEN}
      </h1>
      {film.releaseYear}
      <div class="filmDetail-meta">
        <MetaTable>
          {#if film.studio}
            <MetaKey>Studio</MetaKey>
            <MetaValue>
              <StudioLink studio={film.studio} />
            </MetaValue>
          {/if}
          {#if Array.isArray(film.directors) && film.directors.length > 0}
            <MetaKey>Director{film.directors.length > 1 && 's'}</MetaKey>
            <MetaValue>
              {#each film.directors as person}
                <PersonLink {person} />
              {/each}
            </MetaValue>
          {/if}
          {#if Array.isArray(film.writers) && film.writers.length > 0}
            <MetaKey>Writer{film.writers.length > 1 && 's'}</MetaKey>
            <MetaValue>
              {#each film.writers as person}
                <PersonLink {person} />
              {/each}
            </MetaValue>
          {/if}
          {#if Array.isArray(film.composers) && film.composers.length > 0}
            <MetaKey>Composer{film.composers.length > 1 && 's'}</MetaKey>
            <MetaValue>
              {#each film.composers as person}
                <PersonLink {person} />
              {/each}
            </MetaValue>
          {/if}
        </MetaTable>
      </div>
      <div class="filmDetail-animations">
        {#if Array.isArray(film.animationSequences) && film.animationSequences.length > 0}
          <h2 class="filmDetail-subtitle">Animation Sequences</h2>
          <AnimationGrid animationSequences={film.animationSequences} />
        {/if}
      </div>
      {#if Array.isArray(film.releases) && film.releases.length > 0}
        <div>
          <h2 class="filmDetail-subtitle">Releases</h2>
          <div>
            {#each film.releases as release}
              <div>
                <div>{release.country}</div>
                <div>{release.releaseYear}-{release.releaseMonth}-{release.releaseDay}</div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div class="filmDetail">
    <SkeletonImg />
    <div class="filmDetail-details">
      <h1 class="filmDetail-title">
        <SkeletonText>This movie is loading</SkeletonText>
      </h1>
      <SkeletonText>2020</SkeletonText>
    </div>
  </div>
{/if}
