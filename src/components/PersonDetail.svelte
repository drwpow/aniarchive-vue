<script>
  import FilmGrid from '../FilmGrid.svelte';
  import MetaTable from '../MetaTable.svelte';
  import MetaKey from '../MetaKey.svelte';
  import MetaValue from '../MetaValue.svelte';
  import SkeletonText from '../SkeletonText.svelte';
  import SkeletonImg from '../SkeletonImg.svelte';
  import { age, formatDate } from '../../utils/date.js';
  import StudioLink from '../StudioLink.svelte';

  // props
  export let person;

  // methods
  const formatName = person =>
    person.alias ? person.alias : `${person.firstName} ${person.lastName}`;
  function addToMeta(films, title, meta) {
    films.forEach(film => {
      if (meta[film.id]) {
        meta[film.id] += ` / ${title}`;
      } else {
        meta[film.id] = title;
      }
    });
  }

  // state
  const name = person ? formatName(person) : undefined;
  const filmMeta = {};
  addToMeta(person.directed, 'Director', filmMeta);
  addToMeta(person.wrote, 'Writer', filmMeta);
  addToMeta(person.composed, 'Composer', filmMeta);
  let films = [...person.directed, ...person.wrote, ...person.composed];
  films = films.filter(({ id }, i) => films.findIndex(film => film.id === id) === i);
  films.sort((a, b) => a.releaseYear - b.releaseYear);
</script>

<style>
  .personDetail {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 20rem auto;
  }

  .personDetail-img {
    height: 20rem;
    overflow: hidden;
  }

  .personDetail-img img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .personDetail-films {
    grid-column-end: 3;
    grid-column-start: 1;
    margin-block-start: 2rem;
  }

  .personDetail-title {
    font-size: var(--u4);
    font-weight: 300;
    margin-block-end: 2rem;
    margin-block-start: 0;
  }

  .personDetail-subtitle {
    font-size: var(--u2);
    font-weight: 700;
    margin-block-start: 2rem;
  }
</style>

{#if person}
  <div class="personDetail">
    <div class="personDetail-img">
      <img src={person.image.url} alt={person.image.title} width="400" />
    </div>
    <div class="personDetail-details">
      <h1 class="personDetail-title">
        {name}
        {#if !person.alias && person.kanji}&nbsp;({person.kanji}){/if}
      </h1>
      <p>{person.description}</p>
      <div class="personDetail-meta">
        <MetaTable>
          {#if person.alias}
            <MetaKey>Given Name</MetaKey>
            <MetaValue>
              {person.firstName} {person.lastName}
              {#if person.kanji}&nbsp;({person.kanji}){/if}
            </MetaValue>
          {/if}
          {#if person.birthYear}
            <MetaKey>Born</MetaKey>
            <MetaValue>
              {formatDate({
                year: person.birthYear,
                month: person.birthMonth,
                day: person.birthDay,
              })}
            </MetaValue>
            <MetaKey>Age</MetaKey>
            <MetaValue>
              {age({ year: person.birthYear, month: person.birthMonth, day: person.birthDay }, { year: person.deathYear || new Date().getFullYear(), month: person.deathMonth || undefined, day: person.deathDay || undefined })}
            </MetaValue>
          {/if}
          {#if person.deathYear}
            <MetaKey>Died</MetaKey>
            <MetaValue>
              {formatDate({
                year: person.deathYear,
                month: person.deathMonth,
                day: person.deathDay,
              })}
            </MetaValue>
          {/if}
          <MetaKey>Country</MetaKey>
          <MetaValue>{person.country}</MetaValue>
          {#if Array.isArray(person.founded) && person.founded.length > 0}
            <MetaKey>Founded</MetaKey>
            <MetaValue>
              {#each person.founded as studio}
                <StudioLink {studio} />
              {/each}
            </MetaValue>
          {/if}
        </MetaTable>
      </div>
    </div>
    <div class="personDetail-films">
      <h2 class="personDetail-subtitle">Films</h2>
      <FilmGrid {films} meta={filmMeta} />
    </div>
  </div>
  ); }
{:else}
  <div class="personDetail">
    <SkeletonImg />
    <div class="personDetail-details">
      <h1 class="personDetail-title">
        <SkeletonText>Winsor McCay</SkeletonText>
      </h1>
    </div>
  </div>
{/if}
