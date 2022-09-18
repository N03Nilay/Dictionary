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
            if(data.title == "No Definitions Found")
            {
                means.innerHTML = `No such word found `;
            }
            else{
                let definitions = data[0].meanings[0].definitions[0];
                means.innerHTML = `Meaning : ${definitions.definition}`;
            }
        }
