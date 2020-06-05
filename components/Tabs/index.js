// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector('.topics')

function getTopics() {
    let promise = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    promise.then(response => {
        const topic = response.data.topics
        console.log('the response from the API, organized for us by axios',topic)

        function tabMaker(topic){
            let tab = document.createElement('div')
            tab.classList.add('tab')
            tab.innerHTML = topic
            topics.appendChild(tab)
            return tab
            
        }
        for (i = 0; i < response.data.topics.length; i++) {
            tabMaker(topic[i])
        }
        



    })
    .catch(error => {
        console.log('something went wrong, hopefully the error tells us what', error);
    })

    .then(() => {
    console.log('done')
    })
}
// getTopics()




