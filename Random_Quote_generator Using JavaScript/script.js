const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const socialBtn = document.querySelector(".instagram");

function randomQuote(){
    quoteBtn.classList.add("Loading")
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading")
    });
}
soundBtn.addEventListener("click",() =>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",() =>{
    navigator.clipboard.writeText(quoteText.innerText);
});
socialBtn.addEventListener("click",() =>{
    let instagramurl = `https://instagram.com/intent/instagram?url=${quoteText.innerText}`;
    window.open(instagramurl,"blank");
});

quoteBtn.addEventListener("click",randomQuote);
