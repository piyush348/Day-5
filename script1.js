console.log("..........App Started...........")
function callAPI() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            renderUI(data);
        })
}



function renderUI(data) {
    const root = document.getElementById("root");

    //got the article from data
    const articles = data.articles;
    console.log(articles);


    //single article from the article array
    for (let i = 0; i < articles.length; i++) {
        const ar = articles[i];
        const div = document.createElement("div");
        div.setAttribute("class", "news-card");

        // console.log(ar);


        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);

        const img = document.createElement("img");
        img.src = ar.urlToImage;
        div.appendChild(img);


        const p = document.createElement("p");
        p.innerText = ar.description;
        div.appendChild(p);

        const a = document.createElement("a");
        a.innerText = 'Read More...'
        a.target = 'blank';

        a.href = ar.url;
        div.appendChild(a);


        root.appendChild(div);
    }
}

callAPI();