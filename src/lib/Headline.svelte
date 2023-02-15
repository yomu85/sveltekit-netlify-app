<div class="headline">
  <h1>
    <span>OMDb API</span> <br>
    THE OPEN
    MOVIES DATABASE
  </h1>
  <div class="description">
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
    </p>
    <p>
      <span class="point">lion, frozen 등 과같이 영문 키워드로 영화 제목을 검색하세요.</span>
    </p>
  </div>
</div>

<style lang="scss">
  .headline {
    h1 {
      font-size: 80px;
      font-family: 'Oswald', sans-serif;
      line-height: 1;
      @media #{$mobile} {
        font-size: 60px;
      }
      span {
        color: $color--primary;
      }
    }
    .description {
      margin:30px 0;
      color: $color--white-30;
      .point {
        color: $color--white;
      }
    }
  }
</style>