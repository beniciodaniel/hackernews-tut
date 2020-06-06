import React, { memo } from 'react'
import { mapTime } from '../mappers/mapTime';
import { ArticleWrapper, ArticleTitle, ArticleMeta, ArticleMetaElement } from '../styles/ArticleStyles';


export const Article = memo( function Article({ article }) {
  return (
    <ArticleWrapper data-test-id="article">
      <ArticleTitle>
        <a href={ article.url }>{ article.title }</a>
      </ArticleTitle>
      
      <ArticleMeta>
        <span data-test-id="article-by">
          <ArticleMetaElement color="#000">By:</ArticleMetaElement>{ article.by }
        </span>
        <span data-test-id="article-time">
          <ArticleMetaElement color="#000">Posted:</ArticleMetaElement>{ mapTime(article.time) }
        </span>
      </ArticleMeta>

    </ArticleWrapper>
  )
});