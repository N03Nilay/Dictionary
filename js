const word = document.getElementById('input');
        const searchbtn = document.getElementById('search');
        const means = document.getElementById('meaning');
        const audio = document.getElementById('audio');




        search.addEventListener("click", async () => {
            if (word.value == "") {
                alert("enter a valid input");
            }

            let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value.toLowerCase()}`;
            const res = await fetch(url);
            const data = await res.json();
            displayData(data);

        })
        const displayData = (data) => {
            console.log(data);

            let definitions = data[0].meanings[0].definitions[0];
            let audio = new Audio("https:" + data[0].phonetics[0].audio);



            means.innerHTML = `Meaning : ${definitions.definition}`;

            //adding butto of audio at runtime and make it function

        }
