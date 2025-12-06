var xhr = new XMLHttpRequest()

var url = "./health_news.json";

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function () {
    var newsArticles = xhr.response.articles;
    var articlesDiv = document.getElementById('newsArticles');


    newsArticles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();