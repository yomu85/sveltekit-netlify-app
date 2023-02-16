<script>
  import { page } from  '$app/stores'
  import qs from 'qs'
  import { fade } from 'svelte/transition'

  $: urlQuery = $page.url.search.replace(/\?/g, '')
  $: query = qs.parse(urlQuery)
  $: name = query.name || 'ARONGDAY'
  $: blog = query.blog || 'https://arong.day'
  $: email = query.email || 'yomu85@gmail.com'
  $: image = query.image || '/assets/netlify.png'
</script>

<svelte:head>
  <title>ABOUT | SvelteKit Movie App</title>
</svelte:head>

<div class="user-profile" in:fade>
  <div class="photos">
    <div class="photo">
      <img src="/assets/svelte.png" alt="User">
    </div>
    <div class="photo">
      <img src={image} alt="User">
    </div>
  </div>
  <div class="details">
    <div class="name">{name}</div>
    <a href={blog} class="blog" target="_blank">{blog}</a>
    <div class="email">{email}</div>
  </div>
</div>

<style lang="scss">
  .user-profile {
    padding: 80px 0;
    .photos {
      display: flex;
      justify-content: center;
      .photo {
        flex-shrink: 0;
        width: 230px;
        height: 230px;
        padding: 30px;
        box-sizing: border-box;
        background-color: $color--area;
        border-radius: 50%;
        border: 12px solid $color--black;
        @media #{$mobile}{
          width: 180px;
          height: 180px;
        }
        &:first-child {
          margin-right: -80px;
        }
        img {
          width: 100%;
        }
      }
    }
    .details {
      margin-top: 20px;
      text-align: center;
      .name {
        font-size: 40px;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 20px;
      }
      a.blog {
        color: $color--white
      }
    }
  }
</style>