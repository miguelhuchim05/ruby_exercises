const promoContainer = document.getElementById("js-promo-container");
const noteContainer = document.getElementById("js-note-container");
const noteAmexContainer = document.getElementById("js-note-amex-container");
const buttonContainer = document.getElementById("js-button-pay-container");
const visaCard = document.getElementById("js-img-visa");
const mastercardCard = document.getElementById("js-img-mastercard");
const amexCard = document.getElementById("js-img-amex");
const borderImage = "2px solid rgb(141, 122, 255)";
const borderImageGrey = "2px solid rgb(204, 204, 204)";

const showButtonVisa = () => {
  promoContainer.style.display = "none";
  buttonContainer.style.display = "flex";
  noteContainer.style.display = "flex";
  noteAmexContainer.style.display = "none";  
  visaCard.style.border = borderImage;
  mastercardCard.style.border = borderImageGrey;
  amexCard.style.border = borderImageGrey;
}
const showButtonMastercard = () => {  
  promoContainer.style.display = "flex";
  buttonContainer.style.display = "flex";
  noteContainer.style.display = "flex";
  noteAmexContainer.style.display = "none";
  visaCard.style.border = borderImageGrey;
  mastercardCard.style.border = borderImage;
  amexCard.style.border = borderImageGrey;
}
const showButtonAmex = () => {  
  promoContainer.style.display = "none";
  noteContainer.style.display = "none";
  buttonContainer.style.display = "flex";
  noteAmexContainer.style.display = "flex";
  visaCard.style.border = borderImageGrey;
  mastercardCard.style.border = borderImageGrey;
  amexCard.style.border = borderImage;
}