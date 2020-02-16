<script>
  import { Link } from 'svelte-routing';

  // props
  export let studio = { image: {} };
</script>

<style>
  .studioLink {
    display: inline-block;
  }

  .studioLink-avatar {
    border-radius: 50%;
    display: inline-block;
    height: 2rem;
    margin-inline-end: 0.75em;
    overflow: hidden;
    vertical-align: middle;
    width: 2rem;
  }

  .studioLink-avatar img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>

<Link class="studioLink" to={`/studio/${studio.id}`}>
  <div class="studioLink-avatar">
    <img src={studio.image.url} alt={studio.image.title} />
  </div>
  {studio.name}
</Link>
