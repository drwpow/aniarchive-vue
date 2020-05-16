<script>
import NavBack from '../components/NavBack'

export default {
  components: {NavBack}
}
</script>

<template>
  <main rel="main" class="ani-block">
    <section class="ani-wrapper">
      <NavBack />
      <h1>About</h1>
      <p>The goal of this project is to build a cross-referenced database of animation history.</p>
      <p>While there are other efforts that have attempted this, nothing has truly been crossed-referenced in a browsable way. Or if it has, it’s been stripped of information about the animators and artists that made it possible.</p>
      <p>The project itself is the work of <a target="_blank" rel="noopener nofollow" href="https://pow.rs">Drew Powers</a>.</p>
      <h2 class="mt4">API</h2>
      <p>The first way this archive makes information accessible is via the <a target="_blank" rel="noopener nofollow" href="https://api.aniarchive.org">GraphQL API</a> (<a target="_blank" rel="noopener nofollow" href="https://github.com/dangodev/aniarchive-gql">source</a>). This resource will always be 100% free to browse or use for personal purposes. This free service is provided as-is, and you may be ratelimited at any time for any reason.</p>
      <p>Contact <a href="mailto:drew@pow.rs">drew@pow.rs</a> if you’re consuming the API for commercial purposes. I’m paying for this server time myself; if you’re making money off of it then help pay my bills at least!</p>
      <h2 class="mt4">Code</h2>
      <p>The code for this project is open source (MIT) and can be found here: <a target="_blank" rel="noopener nofollow" href="https://github.com/dangodev/aniarchive-vue">GitHub</a>. Please take or modify any code from this that you’d like.</p>
      <h2 class="mt4">Sakuga Booru</h2>
      <p>You’ll find references to “Sakuga” on the site, as well as links to <a target="_blank" rel="noopener nofollow" href="https://sakugabooru.com">sakugabooru.com</a>. <em>Sakuga</em> is a generic Japanese word that refers to the high-quality scenes in an animated work. However, <em>Sakuga Booru</em> is a specific term referring to sakugabooru.com, an image board where users upload notable animation clips from major works. This site links to sakugabooru.com whenever possible, because who wants to read about an animated film when it’s much more fun to watch?</p>
      <p>This website is not associated with sakugabooru.com in any way, nor does this site take any credit for user-submitted content on that platform. For that reason, clicking on animation clips will always link away to sakugabooru.com which has uploader credit.</p>
      <h2 class="mt4">Privacy</h2>
      <p>I don’t know who you are and I don’t care. There are no trackers on this site whatsoever, like the internet should be. I do not sell your information as I do not have any.</p>
    </section>
  </main>
</template>
