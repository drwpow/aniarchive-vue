<script>
  import { Link } from 'svelte-routing';

  // props
  export let person;
</script>

<style>
  .personLink {
    display: inline-block;
  }

  .personLink-avatar {
    border-radius: 50%;
    display: inline-block;
    height: 2rem;
    margin-inline-end: 0.75em;
    overflow: hidden;
    vertical-align: middle;
    width: 2rem;
  }

  .personLink-avatar img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>

<Link class="personLink" to={`/person/${person.id}`}>
  <div class="personLink-avatar">
    <img src={person.image.url} alt={person.image.title} />
  </div>
  {#if person.alias}{person.alias}{:else}{person.firstName} {person.lastName}{/if}
</Link>
