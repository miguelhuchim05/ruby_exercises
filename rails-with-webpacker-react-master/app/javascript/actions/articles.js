import * as actionTypes from '../constants/actionTypes';
import ArticlesApi from '../api/articlesApi';

export function addArticle(title, content) {
  return {
    type: actionTypes.ADD_ARTICLE,
    title: title,
    content: content
  };
}

export function editArticle(id) {
  return {
    type: actionTypes.EDIT_ARTICLE,
    id: id
  };
}

export function infoArticle(id) {
  return function (dispatch) {
    return ArticlesApi.getArticle(id).then(article => {
        dispatch(successShowArticle(article))
      })
      .catch(error => console.log('error', error));
  }
}

export function successShowArticle(article){
  return {
    type: actionTypes.INFO_ARTICLE,
    article
  }
}

export function removeArticle(id) {
  return {
    type: actionTypes.REMOVE_ARTICLE,
    id: id
  };
}

export function allArticles(){
  return function(dispatch){
    return ArticlesApi.getArticles().then(articles => {
      dispatch(successLoadArticles(articles));
    }).catch(error => {
      console.log('error', error)
    });
  }
}

export function getArticles(page, articlesPerPage){
  return function(dispatch){
    return ArticlesApi.getNextArticles(page, articlesPerPage).then(response => {
      dispatch(successLoadArticles(response));
    }).catch(error => {
      console.log('error', error)
    });
  }
}
export function successLoadArticles(response) {
  return {
    type: actionTypes.ALL_ARTICLES,
    response
  };
}