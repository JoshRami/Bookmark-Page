const SimpleBookmarking = {
  Button: document.getElementById("SimpleBookmarking"),
  Label: HTMLElement,
  Article: document.getElementById("SimpleBookmarkingArticle"),
  isActive: false,
};
SimpleBookmarking.Label = SimpleBookmarking.Button.getElementsByClassName(
  "ActivedLabel"
)[0];

const SpeedySearching = {
  Button: document.getElementById("SpeedySearching"),
  Label: HTMLElement,
  Article: document.getElementById("SpeedySearchingArticle"),
  isActive: false,
};
SpeedySearching.Label = SpeedySearching.Button.getElementsByClassName(
  "ActivedLabel"
)[0];

const EasySharing = {
  Button: document.getElementById("EasySharing"),
  Label: HTMLElement,
  Article: document.getElementById("EasySharingArticle"),
  isActive: false,
};
EasySharing.Label = EasySharing.Button.getElementsByClassName(
  "ActivedLabel"
)[0];
const articles = { SimpleBookmarking, SpeedySearching, EasySharing };
const articlesClasses = articles.SimpleBookmarking.Article.classList.toString().split(" ");
const labelClasses = articles.SimpleBookmarking.Label.classList.toString().split(" ");

//Hide all articles except SimpleBookmarking
articles.SimpleBookmarking.isActive = true; 
for (const article in articles) {
  if(articles[article] !== articles.SimpleBookmarking){
    articlesClasses.forEach(articleClass =>{
      articles[article].Article.classList.remove(articleClass);
    });
    labelClasses.forEach(labelClass =>{
     articles[article].Label.classList.remove(labelClass); 
    });
    articles[article].Article.classList.add("hidden");
    articles[article].Label.classList.add("hidden");
    articles[article].isActive = false;
  }
}
/*
articles.EasySharing.Article.classList.toggle("hidden");
articles.EasySharing.Label.classList.toggle("hidden");
articles.SpeedySearching.Article.classList.toggle("hidden");
articles.SpeedySearching.Label.classList.toggle("hidden");

articles.SimpleBookmarking.isActive = true;
articles.EasySharing.isActive = false;
articles.SpeedySearching.isActive = false;
*/

for (const art in articles) {
  articles[art].Button.addEventListener("click",() => {
    
    for (const article in articles) {
      if (articles[article] === articles[art]) {

        if (!articles[article].isActive) {
          articles[article].Label.classList.remove("hidden");
          articles[article].Article.classList.remove("hidden");
          articlesClasses.forEach(articleClass =>{
            articles[article].Article.classList.add(articleClass);
          });
          labelClasses.forEach(labelClass =>{
            articles[article].Label.classList.add(labelClass);
          });
          articles[article].isActive = true;
        } 
      } 
      else {
        articlesClasses.forEach(articleClass =>{
          articles[article].Article.classList.remove(articleClass);
        });
        labelClasses.forEach(labelClass =>{
          articles[article].Label.classList.remove(labelClass);
        });
        articles[article].Label.classList.add("hidden");
        articles[article].Article.classList.add("hidden");

        articles[article].isActive = false;
      } 
    }
  });
}
