const showVote = document.querySelector('#showVote')

var cat = document.getElementById('cat')
var dog = document.getElementById('dog')
var parrot = document.getElementById('parrot')


showVote.onclick = function() {
	window.location.href = '../index.html'
}

const sendRequest = new EventSource('https://sf-pyw.mosyag.in/sse/vote/stats')

let sendRequestData
sendRequest.onmessage = event =>  {
	sendRequestData = JSON.parse(event.data)

	console.log(sendRequestData)

	summOfVotes = sendRequestData['cats'] + sendRequestData['dogs'] + sendRequestData['parrots']

	catsVote = ((sendRequestData['cats'] * 100) / summOfVotes)
	dogsVote = ((sendRequestData['dogs'] * 100) / summOfVotes)
	parrotsVote = ((sendRequestData['parrots'] * 100) / summOfVotes)


	cat.style.width = catsVote + '%'
	document.getElementById('cat').innerHTML = (sendRequestData['cats'] + '          ' + (Math.round(catsVote)+'%'))
	
	dog.style.width = dogsVote + '%'
	document.getElementById('dog').innerHTML = (sendRequestData['dogs'] + '          ' + (Math.round(dogsVote)+'%'))

	parrot.style.width = parrotsVote + '%'
	document.getElementById('parrot').innerHTML = (sendRequestData['parrots'] + '          ' + (Math.round(parrotsVote)+'%'))
}






