export interface SearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: ThumbnailsItem,
      medium: ThumbnailsItem,
      high: ThumbnailsItem,
      standard: ThumbnailsItem,
      maxres: ThumbnailsItem
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string
    },
    defaultAudioLanguage: string
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
  }

}

interface ThumbnailsItem {
  url: string,
  width: number,
  height: number
}
