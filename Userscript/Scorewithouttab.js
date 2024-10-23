let response
let text
async function start() {
    response = await fetch("https://raw.githubusercontent.com/JuIcEPoopooumgood/Juice/refs/heads/main/Userscript/Scorewithouttabjs.js")
    text = await response.text();
    eval(text)
}
start()
