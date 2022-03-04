<footer>
  <div>
    <a href="https://kit.svelte.dev/" target="_blank">@{new Date().getFullYear()} made with SvelteKit</a>
  </div>
</footer>

<style lang="scss">
  footer {
    padding: 70px;
    text-align: center;
    a {
      color: $color--white-10;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>