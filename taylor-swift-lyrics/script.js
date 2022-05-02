document.querySelector("button").addEventListener("click", getTaylorSwift);


function getTaylorSwift(){

    let songs = document.querySelector('input').value

    fetch(`https://taylorswiftapi.herokuapp.com/get?song=${songs}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("album").innerText = data.album
        document.getElementById("title").innerText = data.song
        document.getElementById("lyrics").innerText = data.quote
    })
    .catch(err => {
        console.log(`error ${err}`)
    })    

 }
 
 
 
 