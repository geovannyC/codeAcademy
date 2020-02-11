// Information to reach API
const apiKey = '50bff44cf3f244be982ab831e9eed2cb';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  xhr.onreadystatechange = () =>{
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
  }
  xhr.open('POST',url)
  xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data)
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
