# svelte-gallery-app
SvelteKit, OMDb API, Netlify의 Serverless 함수 간 통신을 이용하여 만든 [영화 검색 애플리케이션](https://kit.arong.bar/) 입니다.

## Specs
+ [SvelteKit](https://kit.svelte.dev/)
+ [OMDb API](https://omdbapi.com/)
+ [Netlify Serverless Functions](https://docs.netlify.com/functions/overview/)
+ [Lorem Picsum API](https://picsum.photos/)

## Packages
+ SvelteKit: Svelte API를 사용하기 위한 핵심 패키지입니다.
+ autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
+ postcss: CSS 후처리 패키지로 autoprefixer를 사용하기 위해 설치합니다.
+ axios: HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
+ qs: 쿼리스트링(Query String)을 분석하는 라이브러리입니다.

## Build Setup
> 프로젝트 시작 전 패키지 설치
```
npm i
```
