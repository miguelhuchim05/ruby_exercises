import axios from "axios";

class ArticlesApi {
  static getArticles() {
    return axios.get('api/articles')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static getArticle(id){
    return axios.get(`api/articles/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
  static getNextArticles(page, articlesPerPage) {
    return axios.get(`api/articles?page=${page}&amount_per_page=${articlesPerPage}`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error;
        });
  }
}

export default ArticlesApi;