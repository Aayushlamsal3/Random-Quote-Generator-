    <script>
        let quote=document.querySelector(".quote")
        let author=document.querySelector(".author")

        let next=document.querySelector(".next")


        let api_url="https://api.quotable.io/random"


        async function randomquotes(anything){
            let response=await fetch(anything)
            let data=await response.json();
            quote.innerHTML='"' + data.content + '"';
        author.innerHTML= "-" + data.author;
        }
        randomquotes(api_url)
    </script>
