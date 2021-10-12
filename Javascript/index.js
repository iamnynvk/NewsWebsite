console.log("Welcome to ABP News");
let apiKey = "ca76170ebade48d7889dd30479705a27";

//let anySelect = document.getElementsByClassName('cardshow');
let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ca76170ebade48d7889dd30479705a27",
  true
);
xhr.getResponseHeader("Content-type", "application/json");

xhr.onload = function () {
  if (this.status === 200) {
    console.log("main");
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    //console.log(articles);
    articles.forEach((element)=>{
      console.log(element);
     
      //console.log(element.content);
      let news = `
          <div class="card" style="width: 100%; margin-top: 10px; align-items: center;">
              <img src="${element.urlToImage}"
                  class="card-img-top"
                  alt="${element.urlToImage}">
              <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.content}</p>
              </div>
          </div>`;
          newsAccordion.innerHTML += news;

    });

    

  } else {
    console.log("try");
  }
};

xhr.send();


