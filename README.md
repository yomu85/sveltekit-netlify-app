# sveltekit-netlify-app
로컬 및 서버의 환경 변수를 구성하고, OMDb API와 통신하여  
Netlify의 Serverless Functions에서 영화 정보 반환 API를 구성하였습니다.  
SPA 개발에 사용되는 svelte 기반의 SSR 프레임워크인 sveltekit로 [영화 검색 애플리케이션](https://movie.arong.day/) 만들었습니다.

## Specs
+ [Svelte](https://svelte.dev/)
+ [SvelteKit](https://kit.svelte.dev/)
+ [OMDb API](https://omdbapi.com/)
+ [Netlify](https://www.netlify.com/)
  + [Hosting with GitHub(Continuous Deployment)](https://docs.netlify.com/site-deploys/create-deploys/)
  + [Netlify Serverless Functions](https://docs.netlify.com/functions/overview/)
  
## Packages
+ svelteKit: code splitting등 고성능 웹 앱을 구축하기 위한 프레임워크이고, SSR을 지원합니다.
+ svelte: Svelte API를 사용하기 위한 핵심 패키지입니다.
+ autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
+ axios: HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
+ eslint: 자바스크립트 문법에서 에러를 표시해주는 도구입니다.
+ netlify-cli:개발 환경에서도 Netlify Serverless Functions을 사용할 수 있게 해주는 도구입니다.
+ postcss: CSS 후처리 패키지로 autoprefixer를 사용하기 위해 설치합니다.
+ prettier: 개발자들에게 일관적인 코딩 스타일을 유지할 수 있게 도와주는 도구입니다.
+ qs: 쿼리스트링(Query String)을 분석하는 라이브러리입니다.
+ sass: scss파일을 CSS로 컴파일해주는 도구입니다.
+ svelte-preprocess: Babel, PostCss, Sass(Scss) 등 전/후 처리기들을 지원합니다.
