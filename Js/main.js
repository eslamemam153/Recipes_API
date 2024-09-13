//Instant
let myhttp = new XMLHttpRequest;
let row = document.querySelector(".row")
let input = document.querySelector("input")
let selectedFood = document.querySelector("select")

input.addEventListener("blur", function () {
    getData(this.value)
})
selectedFood.addEventListener("change", function () {
    getData(this.value)
})

//Invoke_getData_Function
getData(`cinnamon`)

//Funtion_to_Get_Data
function getData(data) {
    myhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${data}`)
    myhttp.send()
    myhttp.addEventListener("readystatechange", function () {
        if (myhttp.readyState == 4) {
            let allData = JSON.parse(myhttp.response);
            showData(allData.recipes)
            console.log(allData.recipes);
            
        }
    })
}

//Funtion_to_Show_Data
function showData(data) {
    let box = ``
    for (let i = 0; i < data.length; i++) {
        box += `
         <div class="col-md-4">
       <a href="${data[i].source_url}"><img class="w-100 mb-2" src="${data[i].image_url}" alt=""></a>
        <p><b>Title: </b>${data[i].title}</p>
        <p><b>Recipe Id: </b>${data[i].recipe_id}</p>
        <p><b>Puplisher: </b>${data[i].publisher}</p>
        <p><b>Social Rank: </b><span class="text-warning">${data[i].social_rank}</span></p>
       </div> `

    }
    row.innerHTML = box
}





































