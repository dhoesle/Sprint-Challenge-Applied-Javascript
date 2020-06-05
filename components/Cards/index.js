// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container')


function getCards() {
    let promise = axios.get('https://lambda-times-backend.herokuapp.com/articles')
    promise.then(response => {
        let articles = response.data.articles.javascript
        console.log('the response from the API, organized for us by axios',articles)

        
        



    })
    .catch(error => {
        console.log('something went wrong, hopefully the error tells us what', error);
    })

    .then(() => {
    console.log('done')
    })
}
getCards()


// console.log("cardsContainer", cardsContainer)


function cardMaker(){
    let card = document.createElement('div')
    card.classList.add('card')
    // console.log("cardMaker -> card", card)

    let headline = document.createElement('div')
    headline.classList.add('headline')
    headline.innerHTML = `{Headline of article}`
    card.appendChild(headline)

    let author = document.createElement('div')
    author.classList.add('author')
    card.appendChild(author)

    let imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    let img = document.createElement('img')
    // img.src = `{url of authors image}`
    imgContainer.appendChild(img)

    let span = document.createElement('span')
    span.innerHTML = `By {author's name}`
    author.appendChild(span)


}
cardMaker()