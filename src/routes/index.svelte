<script>
  import Headline from '$lib/Headline.svelte'
  import Search from '$lib/Search.svelte'
  import MovieList from '$lib/MovieList.svelte'
  import { initMovies } from '$lib/stores'
  import { fade } from 'svelte/transition'
  initMovies()
</script>

<svelte:head>
  <title>HOME</title>
</svelte:head>

<div class="container" in:fade>
  <Headline />
  <Search />
  <MovieList />
</div>

<style lang="scss"></style>