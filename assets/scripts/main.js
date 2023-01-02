// Variables
const ThankyouText = document.getElementById("thank-you-text")
const SelectRating = document.getElementById("select-rating")
const SubmitButton = document.getElementById("submit")
const RatingItems = document.querySelectorAll(".rating-item")
const Inputs = document.querySelectorAll("input")

const Evaluation = document.querySelector(".evaluation")
const Thankyou = document.querySelector(".thankyou")

const MobileYee = document.getElementById("mobileyee")
const MobileYeeStyle = getComputedStyle(MobileYee)

let Rating

// Core
for (let i = 0; i < RatingItems.length; i++) {
    RatingItems[i].addEventListener("click", () => {
        const Item = RatingItems[i]

        for (let i = 0; i < RatingItems.length; i++) {
            RatingItems[i].classList.remove("active")
        }

        Rating = Inputs[i].value

        Item.classList.add("active")
        SubmitButton.disabled = false
    })
}

SubmitButton.addEventListener("click", () => {
    Evaluation.style.display = "none"
    Thankyou.style.display = "block"
    SelectRating.innerText = `You selected ${Rating} out of 5`
})

if (MobileYeeStyle.display == "block") {
    ThankyouText.innerText = "We appreciate you taking the time to give a \nrating. If you ever need more support, don’t\n hesitate to get in touch!"
}