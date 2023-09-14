const button = document.querySelector("#button")

function click (){
    button.addEventListener('click', () => {
        document.body.classList.toggle("dark-mode")
        return
    })
}

click()