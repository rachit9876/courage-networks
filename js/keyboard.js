const element = document.getElementById("typing-text");
const links = [
    { text: "Web Game", url: "https://game-networks.pages.dev/courage/" },
    { text: "Research", url: "researchPaper/ResearchPaper.pdf" },
    { text: "Gallery", url: "pages/gallery.html" },
    { text: "Watch Now", url: "https://schan.pages.dev/player?show=courage&episode=1" },
    { text: "Episodes Info", url: "pages/episodes.html" },
    { text: "Characters", url: "pages/characters.html" }
];

element.innerHTML = "Hello Choose The Following : <br><br>";
links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.text;
    a.style.display = "block";
    a.style.color = "#0066cc";
    a.style.textDecoration = "underline";
    a.style.marginBottom = "1em";
    a.style.visibility = "hidden";
    element.appendChild(a);
});

let i = 0;
const allLinks = element.querySelectorAll("a");

function type() {
    if (i < allLinks.length) {
        const link = allLinks[i];
        const text = link.textContent;
        link.textContent = "";
        link.style.visibility = "visible";
        let j = 0;
        
        function typeLinkText() {
            if (j < text.length) {
                link.textContent += text.charAt(j);
                j++;
                setTimeout(typeLinkText, 50);
            } else {
                i++;
                setTimeout(type, 100);
            }
        }
        typeLinkText();
    }
}

type();
