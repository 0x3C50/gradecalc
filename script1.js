function update() {
    requestAnimationFrame(update)
    let grades = 0.0
    let totaleWochenstunden = 0
    for(let l of document.getElementsByClassName("gradeEntry")) {
        let note = parseFloat(l.querySelector(".nt").value)
        let stunden = parseInt(l.querySelector(".st").value)
        grades += note * stunden
        totaleWochenstunden += stunden
    }
    let g = grades / totaleWochenstunden
    g = Math.max(Math.min(g, 6), 1)
    document.querySelector("#grade").innerHTML = "Teilnote LBT: "+g.toFixed(2);
    document.querySelector("#ws").innerHTML = `Totale Wochenstunden: ${totaleWochenstunden}`
}

requestAnimationFrame(update)

function add() {
    var id = Math.random()+"";
    var child = document.createElement("div")
    child.classList.add("oneline")
    child.classList.add("gradeEntry")
    child.id = id;
    child.innerHTML = `
    <p>Proz. Note von</p>
    <input class="t nt" type="number" min="1" value="6">
    <p>in fach mit</p>
    <input class="t st" type="number" min="1" value="6">
    <p>Wochenstunden</p>
    <button onclick="document.getElementById('${id}').remove()">-</button>
    `;
    
    document.querySelector("#punkte").insertBefore(child, document.querySelector("#target"));
}
add();
document.querySelector("#add").addEventListener("click", add)