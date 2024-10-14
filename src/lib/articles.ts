import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  category: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles(category?: string) {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))
  articles = articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))

  return category ? articles.filter(article => article.category && article.category === category) : articles
}

export async function getCategories() {
  let articles = await getAllArticles()

  let categories = [...new Set(articles.map(article => article.category))]

  return categories
}

