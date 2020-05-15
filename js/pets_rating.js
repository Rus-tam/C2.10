const dogsVote = document.querySelector('#dogsVote')
const catsVote = document.querySelector('#catsVote')
const parrotsVote = document.querySelector('#parrotsVote')

const showResults = document.querySelector('#showResults')


let userVote

var requestURL = 'https://sf-pyw.mosyag.in/sse/vote'



const dissabledButton = () => {
	dogsVote.disabled = true;
	catsVote.disabled = true;
	parrotsVote.disabled = true;
}

dogsVote.onclick = function() {
	userVote = "/dogs"
	dissabledButton()
	requestURL = requestURL + userVote
	response()
}

catsVote.onclick = function() {
	userVote = "/cats"
	dissabledButton()
	requestURL = requestURL + userVote
	response()
}

parrotsVote.onclick = function() {
	userVote = '/parrots'
	dissabledButton()
	requestURL = requestURL + userVote
	response()
}

let response = function() {
    fetch(requestURL,  {
        method: 'POST',
        body: "",
    });
}


showResults.onclick = function() {
	window.location.href = 'html/result.html'	
}





