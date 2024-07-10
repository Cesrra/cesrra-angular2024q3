import { SearchItem } from './search-item';

export interface SearchResults {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: SearchItem[]
}
