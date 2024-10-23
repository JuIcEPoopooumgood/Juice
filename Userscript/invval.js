let response
let text
async function start() {
    response = await fetch("https://raw.githubusercontent.com/JuIcEPoopooumgood/Juice/refs/heads/main/Userscript/invvaljs.js")
    text = await response.text();
    eval(text)
}
start()
