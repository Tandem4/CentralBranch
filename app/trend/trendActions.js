export function requestTrends(trends) {
  return {
    type: 'REQUEST_TRENDS',
    trends
  }
}

export function requestArticles(articles) {
  return {
    type: 'REQUEST_ARTICLES',
    articles
  }
}
