const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase();

    const listItems = document.querySelectorAll("#myList li");
    if (!filter) {
        listItems.forEach(el => {
            el.style.display = ""
        });
        return;
    }

    listItems.forEach(el => {
        const text = el.textContent.toUpperCase();
        if (text.includes(filter)) {
            el.style.display = ""
            el.style.color = "red"
            el.style.fontWeight = 500
        } else {
            el.style.display = "none"
        }
    });

    // console.log("Filter value", filter)
}


document.querySelector("#search").addEventListener("input", onSearch)




// const searchInput = document.getElementById("search");

// searchInput.addEventListener("input", () => {
//     console.log("Input triggered")
// }

// )


const body = document.querySelector("body");
const element = document.querySelector(".container");
const light = document.getElementById("light");


element.addEventListener("scroll", () => {
    const value = 255 - (((light.getBoundingClientRect().top - 8) / 200) * 255);
    body.style.backgroundColor = `rgb(${value},${value},${value})`

})
