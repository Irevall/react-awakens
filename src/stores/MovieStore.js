import { createContext } from 'react'
import { observable, computed, action, observe } from 'mobx'
import { getMovies } from '@/services/ApiService'

class MovieStore {
  @observable loading = false
  @observable movies = []

  constructor () {
    this.fetchData()
  }

  @action
  async fetchData () {
    this.loading = true;

    try {
      this.movies  = await getMovies()
    } catch (err) {
      // TODO
    }

    this.loading = false;
  }

 // @observe(movies, () => {
 //
 // })

}

export const MovieStoreContext = createContext(new MovieStore())