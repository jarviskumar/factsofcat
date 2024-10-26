let loadingimg = document.getElementById("Cat_img");
function generate() {
    setTimeout(()=> {
        function getFact() {
            let url = "https://meowfacts.herokuapp.com/"
            let response = fetch(url)
            response.then((fact)=> {
                return fact.json()
            }).then((fact)=> {
                ihtml = ""
                for (let item in fact) {
                    ihtml = `<p class="factBox"> ${(fact[item]).toString()} </p>`
                }
                document.getElementById("cardid").innerHTML = ihtml;
            })
        }
        getFact()
    });
    loading();
    loading_end()
}

function loading() {
    loadingimg.removeAttribute("hidden");
    document.getElementById("cardid").setAttribute("hidden",true)
}
function loading_end() {
    setTimeout(()=> {
        loadingimg.setAttribute("hidden",true);
        document.getElementById("cardid").removeAttribute("hidden")
    },2000)


}