<script>
  import FilmGrid from '../FilmGrid.svelte';
  import MetaTable from '../MetaTable.svelte';
  import MetaKey from '../MetaKey.svelte';
  import MetaValue from '../MetaValue.svelte';
  import PersonLink from '../PersonLink.svelte';
  import SkeletonText from '../SkeletonText.svelte';
  import SkeletonImg from '../SkeletonImg.svelte';

  // props
  export let studio;
</script>

<style>
  .studioDetail {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 20rem auto;
  }

  .studioDetail-films {
    grid-column-end: 3;
    grid-column-start: 1;
  }

  .studioDetail-img {
    height: 20rem;
  }

  .studioDetail-img img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .studioDetail-title {
    font-size: var(--u4);
    font-weight: 300;
    margin-block-start: 0;
  }
</style>

{#if studio}
  <div class="studioDetail">
    <div class="studioDetail-img">
      <img src={studio.image.url} alt={studio.name} width="400" />
    </div>
    <div class="studioDetail-details">
      <h1 class="studioDetail-title">{studio.name}</h1>
      <div class="studioDetail-meta">
        <MetaTable>
          {#if studio.foundedYear}
            <MetaKey>Founded</MetaKey>
            <MetaValue>{studio.foundedYear}</MetaValue>
          {/if}
          {#if Array.isArray(studio.founders) && studio.founders.length > 0}
            <MetaKey>Founders</MetaKey>
            <MetaValue>
              {#each studio.founders as person}
                <PersonLink {person} />
              {/each}
            </MetaValue>
          {/if}
          {#if studio.country}
            <MetaKey>Country</MetaKey>
            <MetaValue>{studio.country}</MetaValue>
          {/if}
          {#if studio.city}
            <MetaKey>City</MetaKey>
            <MetaValue>{studio.city}</MetaValue>
          {/if}
        </MetaTable>
      </div>
    </div>
    <div class="studioDetail-films">
      <h2 class="studioDetail-subtitle">Films</h2>
      <FilmGrid films={studio.films} />
    </div>
  </div>
{:else}
  <div class="studioDetail">
    <SkeletonImg />
    <div class="studioDetail-details">
      <h1 class="studioDetail-title">
        <SkeletonText>Studio Ghibli</SkeletonText>
      </h1>
    </div>
    <div class="studioDetail-films">
      <h2 class="studioDetail-subtitle">
        <SkeletonText>Films</SkeletonText>
      </h2>
      <FilmGrid />
    </div>
  </div>
{/if}
