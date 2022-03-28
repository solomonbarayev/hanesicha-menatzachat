const content = document.querySelector(".content");
const stars = document.querySelectorAll(".stars__star");

let starSelected = {};

//loop to add eventListener to each star
stars.forEach((star) => {
  star.addEventListener("click", () => {
    //loop again to remove the 'stars__star_active' from all others stars
    // To avoid confusion, I use 'i' as a name for each star in stars
    stars.forEach((i) => i.classList.remove("stars__star_active"));

    // Then I add the 'stars__star_active' to the clicked element
    star.classList.add("stars__star_active");
    starSelected = star;
  });
});

const submit = document.querySelector(".content__submit");

submit.addEventListener("click", function () {
  content.innerHTML = `
    <img class="content__thankyou-img" src="./images/illustration-thank-you.svg">
    <span class="star__rating">You have selected ${starSelected.textContent} out of 5</span>
    <h1 class="content__header content__header_ty">Thank you!</h1>
    <p class="content__text content__text_ty">
    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
  `;
});
