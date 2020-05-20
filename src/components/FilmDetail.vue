<script>
import AnimationGrid from './AnimationGrid.vue';
import PersonLink from './PersonLink.vue';
import StudioLink from './StudioLink.vue';

export default {
  props: { film: Object },
  computed: {
    hasStudio() {
      return this.film && this.film.studio;
    },
    hasDirectors() {
      return this.film && Array.isArray(this.film.directors) && this.film.directors.length;
    },
    hasWriters() {
      return this.film && Array.isArray(this.film.writers) && this.film.writers.length;
    },
    hasComposers() {
      return this.film && Array.isArray(this.film.composers) && this.film.composers.length;
    },
    hasSakuga() {
      return (
        this.film &&
        Array.isArray(this.film.animationSequences) &&
        this.film.animationSequences.length
      );
    },
    hasReleases() {
      return this.film && Array.isArray(this.film.releases) && this.film.releases.length;
    },
  },
  components: { AnimationGrid, PersonLink, StudioLink },
};
</script>

<template>
  <div>
    <div v-if="film">
      <div class="ani-filmdetail ani-unigrid">
        <img class="ani-filmdetail-img" :src="film.image.url" :alt="film.title" width="400" />
        <div class="ani-filmdetail-details">
          <h1 class="mt0 mb2">
            {{ film.title }}
            <div v-if="film.title !== film.titleEN">{{ film.titleEN }}</div>
          </h1>
          {{ film.releaseYear }}
          <div class="ani-filmdetail-meta">
            <div class="ani-meta">
              <div v-if="hasStudio" class="ani-meta-key">Studio</div>
              <div v-if="hasStudio" class="ani-meta-val">
                <StudioLink :studio="film.studio" />
              </div>

              <div
                v-if="hasDirectors"
                class="ani-meta-key"
              >Director{{ film.directors.length > 1 ? 's' : '' }}</div>
              <div v-if="hasDirectors" class="ani-meta-val">
                <PersonLink v-for="person in film.directors" :key="person.id" :person="person" />
              </div>

              <div
                v-if="hasWriters"
                class="ani-meta-key"
              >Writer{{ film.writers.length > 1 ? 's' : '' }}</div>
              <div v-if="hasWriters" class="ani-meta-val">
                <PersonLink v-for="person in film.writers" :key="person.id" :person="person" />
              </div>

              <div
                v-if="hasComposers"
                class="ani-meta-key"
              >Composer{{ film.composers.length > 1 ? 's' : '' }}</div>
              <div v-if="hasComposers" class="ani-meta-val">
                <PersonLink v-for="person in film.composers" :key="person.id" :person="person" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="hasSakuga" class="ani-filmdetail-animations">
        <h2
          class="mt2 mb2"
          title="Sakuga means “quality animation.” The following clips can be browsed on the third-party website sakugabooru.com (this website is not affiliated in any way with sakugabooru.com)"
        >
          Sakuga
          <sup>?</sup>
          ({{ film.animationSequences.length }})
        </h2>
        <AnimationGrid :sequences="film.animationSequences" />
      </div>
      <div v-if="hasReleases">
        <h2 class="mt2 mb2">Releases</h2>
        <div v-for="(rel, i) in film.releases" :key="i">
          <div>
            <div>{{ rel.country }}</div>
            <div>{{ rel.releaseYear }}-{{ rel.releaseMonth }}-{{ rel.releaseDay }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="ani-filmdetail ani-unigrid">
      <div class="ani-skeleton--img ani-filmdetail-img"></div>
      <div class="ani-filmdetail-details">
        <h1 class="mt0 mb2">
          <div class="ani-skeleton">This movie is loading</div>
        </h1>
        <div class="ani-skeleton">2020</div>
      </div>
    </div>
  </div>
</template>
