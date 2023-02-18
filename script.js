let textToSearch = document.getElementById("text-to-search");
let paragraph = document.getElementById("paragraph").textContent;

textToSearch.addEventListener("input", search);

function search() {

  let input = textToSearch.value;
  let regex = new RegExp(input, "gi");
  let newParagraph = paragraph.replace(regex, (match) => `<mark>${match}</mark>`);
  document.getElementById("paragraph").innerHTML = newParagraph;



    // let text = '';
    // let data = paragraph.textContent
    // let inputValue = textToSearch.value;

    // let regex = `/${inputValue}/gi`;

    // let matches = data.match(regex);

    // let newstring = new Set(matches)
    // console.log(newstring)

    // for(let i = 0 ; i<newstring.length; i++){ 
    //     text=data.replaceAll(inputValue,`<mark>${inputValue}</mark>`)
    //     data = text
    // }
    // // paragraph = paragraph.lower()

    // console.log(text)
    // paragraph.innerHTML = text;

    // Characters to be escaped [.*+?^${}()|[\]\\] (There characters should not be searched in the text)
}
