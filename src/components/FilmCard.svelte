<script>
  import { Link } from 'svelte-routing';
  import SkeletonImg from '../SkeletonImg/index.js';
  import SkeletonText from '../SkeletonText/index.js';

  export let id;
  export let image;
  export let meta = {};
  export let releaseYear;
  export let skeleton;
  export let title;
  export let titleEN;
</script>

<style>
  .filmCard {
    color: var(--fg);
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .filmCard-title {
    font-size: 1em;
    font-weight: 400;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  .filmCard-title small {
    display: block;
    font-size: var(--d2);
  }

  .filmCard-img {
    border-radius: 0.25rem;
    display: block;
    margin-bottom: 0.5rem;
    max-width: 100%;
    height: calc(300px / var(--oneSheet));
    overflow: hidden;
    width: 300px;
  }

  .filmCard-img img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>

{#if !skeleton}
  <Link to={`/film/${id}`} class="filmCard">
    <div class="filmCard-img">
      <img alt={title} src={image} height="425" width="300" />
    </div>
    <h3 class="filmCard-title">
      {title}
      {#if titleEN !== title}
        <br />
        {titleEN}
      {/if}
    </h3>
    <div class="filmCard-year">{releaseYear}</div>
    {meta}
  </Link>
{:else}
  <div class="filmCard">
    <div class="filmCard-img">
      <SkeletonImg />
    </div>
    <h3 class="filmCard-title">
      <SkeletonText>{title}</SkeletonText>
      <small>
        <SkeletonText>{meta}</SkeletonText>
      </small>
    </h3>
    <div class="filmCard-year">
      <SkeletonText>{releaseYear}</SkeletonText>
    </div>
  </div>
{/if}
