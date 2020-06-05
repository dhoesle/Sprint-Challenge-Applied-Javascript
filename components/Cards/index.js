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
        let axiosTopics = response.data.articles        
        let jsArticles = axiosTopics.javascript
        let bsArticles = axiosTopics.bootstrap
        let techArticles = axiosTopics.technology
        let jqArticles = axiosTopics.jquery
        let nArticles = axiosTopics.node


     
        
        
        
        console.log('the response from the API, organized for us by axios',response.data.articles)
        
        let topicsArray = []
        for (let [key,] of Object.entries(axiosTopics)) {
            topicsArray.push(key)
            console.log(key);
          }
        console.log(topicsArray) 
        
        for (i = 0; i < jsArticles.length; i++){
            newCard = cardMaker(jsArticles[i])
            cardsContainer.appendChild(newCard)  
        }

        for (i = 0; i < bsArticles.length; i++){
            newCard = cardMaker(bsArticles[i])
            cardsContainer.appendChild(newCard)  
        }
        
        for (i = 0; i < techArticles.length; i++){
            newCard = cardMaker(techArticles[i])
            cardsContainer.appendChild(newCard)  
        }

        for (i = 0; i < jqArticles.length; i++){
            newCard = cardMaker(jqArticles[i])
            cardsContainer.appendChild(newCard)  
        }

        for (i = 0; i < nArticles.length; i++){
            newCard = cardMaker(nArticles[i])
            cardsContainer.appendChild(newCard)  
        }


        
        



    })
    .catch(error => {
        console.log('something went wrong, hopefully the error tells us what', error);
    })

    .then(() => {
    console.log('done')
    })
}
getCards()

function cardMaker(article){
    let card = document.createElement('div')
    card.classList.add('card')
    // console.log("cardMaker -> card", card)

    let headline = document.createElement('div')
    headline.classList.add('headline')
    headline.innerHTML = `${article.headline}`
    card.appendChild(headline)

    let author = document.createElement('div')
    author.classList.add('author')
    card.appendChild(author)

    let imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    let img = document.createElement('img')
    img.src = `${article.authorPhoto}`
    imgContainer.appendChild(img)

    let span = document.createElement('span')
    span.innerHTML = `By ${article.authorName}`
    author.appendChild(span)

    // console.log("cardMaker -> card", card)
    return card


}


// console.log("cardsContainer", cardsContainer)


// 