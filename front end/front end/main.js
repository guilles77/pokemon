
var poke1 = []
var poke2 = []
var poke3 = []
var poke4 = []
var poke5 = []
var poke6 = []

// function clearPoke () {
// if (document.getElementById('first') = true) {
//     document.querySelector("#poke1img").src = ''

// }


// }




document.getElementById('check').addEventListener('click',checkPoke);

    function checkPoke  () {
        var pokeID = document.querySelector('input').value
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
        fetch(url)
            .then(res=> res.json())
            .then (data => {
                document.querySelector('h1').innerText = data.name
                document.querySelector("#poke").src = data.sprites.front_default
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }

document.getElementById('save').addEventListener('click',getPoke);

        function getPoke  () {
            var pokeID = document.querySelector('input').value
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/` 
        
    fetch(url)
        .then(res=> res.json())
        .then (data => {
               
if (poke1.length === 0 ) {
            poke1.push (data)
            document.querySelector("#poke1img").src = poke1[0].sprites.front_default
            document.querySelector("#poke1name").innerText = poke1[0].name 
         } else if (poke2.length === 0 ) {
            poke2.push (data);
            document.querySelector("#poke2img").src = poke2[0].sprites.front_default
            document.querySelector("#poke2name").innerText = poke2[0].name 
            }
            else if (poke3.length === 0 ) {
                poke3.push (data);
                document.querySelector("#poke3img").src = poke3[0].sprites.front_default
                document.querySelector("#poke3name").innerText = poke3[0].name
                }
                else if (poke4.length === 0 ) {
                    poke4.push (data);
                    document.querySelector("#poke4img").src = poke4[0].sprites.front_default
                    document.querySelector("#poke4name").innerText = poke4[0].name
                    }
                    else if (poke5.length === 0 ) {
                        poke5.push (data);
                        document.querySelector("#poke5img").src = poke5[0].sprites.front_default
                        document.querySelector("#poke5name").innerText = poke5[0].name
                        }else if (poke6.length === 0 ) {
                            poke6.push (data);
                            document.querySelector("#poke6img").src = poke6[0].sprites.front_default
                            document.querySelector("#poke6name").innerText = poke6[0].name
                            }else
                            console.log("You have enough pokemons");
                         })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }
    
