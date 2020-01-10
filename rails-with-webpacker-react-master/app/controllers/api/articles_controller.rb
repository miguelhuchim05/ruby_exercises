class Api::ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token
  DEFAULT_PER_PAGE = 10

  def index
    articles = Article.all.order(created_at: :desc)
    articles_per_page = params[:amount_per_page] || DEFAULT_PER_PAGE
    @paginated_articles = articles.paginate(page: params[:page], per_page: articles_per_page)

    render json: {
      articlesList: @paginated_articles,
      page: @paginated_articles.current_page,
      pages: @paginated_articles.total_pages
    }
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      render json: @article, status: :ok
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end
  
  private
    def article_params
      params.require(:article).permit(:title, :content)
    end
end
