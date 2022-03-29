var poke1 = []
var poke2 = []
var poke3 = []
var poke4 = []
var poke5 = []
var poke6 = []
var pokeBag = []


document.getElementById('save').addEventListener('click',getPoke);

    function getPoke  () {
        var pokeID = document.querySelector('input').value
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`

    fetch(url)
        .then(res=> res.json())
        .then (data => {
            document.querySelector("#name").value = data.name
            document.querySelector("#saveimg").value = data.sprites.front_default
            document.querySelector("#poke").src = data.sprites.front_default
            pokeBag.push(data)
            if (pokeBag.length > 3) pokeBag.length = 3;

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }
   