import axios from 'axios'
import { writable, get } from 'svelte/store'

export const movies = writable([])
export const loading = writable(false)
export const theMovie = writable({})
export const message = writable('Search for the movie title!')

export function initMovies() {
  movies.set([])
  message.set('Search for the movie title!')
  loading.set(false)
}

export async function searchMovies(payload) {
  if (get(loading)) return
  loading.set(true)
  message.set('')
  
  let total = 0

  try {
    const res = await _fetchMovie({
      ...payload, 
      page: 1
    })
    const { Search, totalResults } = res.data
    movies.set(Search)
    total = totalResults
  } catch (msg) {
    movies.set([])
    message.set(msg)
    loading.set(false)
    return
  }

  // 14 / 10 => 1.4 => 2
  // 7 / 10 => 0.7 => 1
  // 63 / 10 => 6.3 => 7
  const pageLength = Math.ceil(total / 10) //올림 처리
  
  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page += 1) {
      if (page > (payload.number / 10)) break
      const res = await _fetchMovie({
        ...payload,
        page
      })
      //console.log(res)
      const { Search } = res.data
      movies.update($movies => {
        $movies.push(...Search)

        //객체의 값들이 일치하는 첫 번째 객체의 배열 인덱스를 찾는 메서드가 findIndex() 메서드입니다.
        $movies = $movies.filter((el, idx, arr)=>{
            return arr.findIndex((item) => item.imdbID === el.imdbID) === idx
        });
        return $movies
      })
    }
  }
  
  console.log(get(movies).length)
  loading.set(false)
}

export async function searchMovieWithId(id) {
  if (get(loading)) return
  loading.set(true)

  const res = await _fetchMovie({
    id
  })
  console.log(res)

  theMovie.set(res.data)
  loading.set(false)
}

function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload
  const OMDB_API_KEY = 'c91aa559'

  const url = id 
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full` 
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async(resolve, reject) => {
    try {
      const res = await axios.get(url)
      console.log(res.data)
      if(res.data.Error) {
        reject(res.data.Error)
      }
      resolve(res)
    } catch (error) {
      console.log(error.response.status)
      reject(error.message)
    }
  })
}