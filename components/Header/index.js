// STEP 1: Create a Header component.
// -----------------------
let headerContainer = document.querySelector('.header-container')

// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerMaker() {
    let header = document.createElement('div')
    header.classList.add('header')
    headerContainer.appendChild(header)

    let date = document.createElement('span')
    date.classList.add('date')
    date.innerHTML = 'SMARCH 28, 2019'
    header.appendChild(date)

    let title = document.createElement('h1')
    title.innerHTML = 'Lambda Times'
    header.appendChild(title)

    let temp = document.createElement('span')
    temp.classList.add('temp')
    temp.innerHTML = '98 degrees'
    header.appendChild(temp)
    
    return header
}

headerMaker();
