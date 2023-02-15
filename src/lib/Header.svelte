<script>
  import { page } from  '$app/stores'
  import { goto } from '$app/navigation'
  import Logo from '$lib/Logo.svelte'
</script>

<header>
  <Logo />
  <nav>
    <ul>
      <li><a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">Home</a></li>
      <li><a class:active={$page.url.pathname.startsWith('/movie/')} sveltekit:prefetch href="/movie/tt4520988">Movie</a></li>
      <li><a class:active={$page.url.pathname === '/about'} sveltekit:prefetch href="/about">About</a></li>
    </ul>
  </nav>
  <div 
    class="user"
    on:click={event=> {
      goto('/about?name=GitHub%20Repo.&image=%2Fassets%2Fgithub2.png')
    }}>
    <img src="/assets/svelte.png" alt="user">
  </div>
</header>

<style lang="scss">
  header {
    padding: 20px 40px;
    background-color: $color--black-90;
    position: sticky;
    top:0;
    z-index: 9;
    display:flex;
    align-items: flex-end;
    @media #{$mobile} {
      padding: 14px 20px;
    }
    nav {
      @media #{$mobile}{
        display:none;
      }
      margin-left: 40px;
      ul {
        display: flex;
        li {
          margin-left: 10px;
          &:first-child{
            margin-left:0;
          }
          a {
            font-size: 14px;
            font-weight: 700;
            color: $color--white-50;
            text-decoration: none;
          }
        }
      }
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: $color--area;
      cursor: pointer;
      position:absolute;
      top:0;
      bottom:0;
      right:40px;
      margin:auto;
      transition: .4s;
      @media #{$mobile} {
        right:20px;
      }
      &:hover {
        background-color: lighten($color--area, 20%);
      }
      img {
        width: 100%;
      }
    }
  }
  header :global(a.active) {
    color: $color--primary !important;
  }
</style>