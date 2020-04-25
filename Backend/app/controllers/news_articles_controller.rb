class NewsArticlesController < ApplicationController
    def index
        @news_articles = NewsArticle.all 

        render json: { articles: @news_articles }
    end
end
