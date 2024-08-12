let titolo = document.querySelector("input");
let corpo = document.querySelector("#body");
let invio = document.querySelector("button");


invio.addEventListener("click", ()=>{
    let title = titolo.value;
    let body = corpo.value;
    let date = new Date();
    let formatDate = date.toLocaleDateString();

    if (title === '' || body === '') {
        alert('Titolo e paragrafo non possono essere vuoti!');
        return;
    }

    let article = document.createElement("article");
    article.innerHTML = `<h2>${title}</h2><p>${body}</p><p>Data di pubblicazione: ${formatDate}</p>`;

    let main = document.querySelector("main");
    main.appendChild(article);

    // Pulire gli input
    titolo.value = "";
    corpo.value = "";
});