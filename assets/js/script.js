const subTitle = document.querySelector("#subTitle");

const firstLi = document.querySelector("ul li:first-child");
const lastLi = document.querySelector("ul li:last-child");
const createList = document.querySelector("#createList");
const comboList = document.querySelector("#comboList");
const comboListOption = document.querySelectorAll("#comboList option");
const pexelsImage = document.querySelector("#pexelsImage");
const interruttore = document.querySelector("#interruttore");

console.log(document.getElementsByTagName("li"));
console.log(document.querySelectorAll("li"));

subTitle.textContent = "Testo inserito da JavaScript";

console.log(firstLi.textContent);
lastLi.textContent += "<b>Non sono in grassetto</b>";

createList.innerHTML = "<ul><li>List 1</li><li>List 1</li><li>List 1</li></ul>";

comboListOption.forEach((optionValue) => {
  console.log(optionValue.value);
  optionValue.value = "Javascript";
});

console.log(pexelsImage.getAttribute("src"));
pexelsImage.setAttribute(
  "src",
  "https://images.pexels.com/photos/4727828/pexels-photo-4727828.jpeg?_gl=1*15ldu2x*_ga*MzU5MzMwMjQxLjE3NzgwNjQyNzY.*_ga_8JE65Q40S6*czE3NzkxNzk5ODAkbzckZzEkdDE3NzkxODAwOTMkajU2JGwwJGgw",
);

pexelsImage.src =
  "https://images.pexels.com/photos/4727828/pexels-photo-4727828.jpeg?_gl=1*15ldu2x*_ga*MzU5MzMwMjQxLjE3NzgwNjQyNzY.*_ga_8JE65Q40S6*czE3NzkxNzk5ODAkbzckZzEkdDE3NzkxODAwOTMkajU2JGwwJGgw";
pexelsImage.setAttribute("alt", "Immagine da Pixels");

comboList.setAttribute("disabled", "true");

let classContain = subTitle.classList.contains("redText");

if (classContain) {
  subTitle.classList.remove("redText");
}

pexelsImage.classList.add("img");

interruttore.addEventListener("click", () => {
  let appear = true;
  if (appear) !appear;
  interruttore.classList.toggle("yellowBg");
  const innerIcon = document.createElement("image");
  innerIcon.setAttribute(
    "src",
    "https://img.icons8.com/color/1200/whatsapp.jpg",
  );
  innerIcon.classList.add("icon");
  if (appear) {
    interruttore.appendChild(innerIcon);
  }
});
