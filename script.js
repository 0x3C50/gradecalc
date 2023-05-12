var points = 0, total = 1;
var frac = 0;

const gradeRanges = [
    [0.96, "1"],
    [0.8, "2"],
    [0.6, "3"],
    [0.45, "4"],
    [0.16, "5"],
    [0, "6"]
]

function update() {
    document.querySelector("#frac").innerHTML = `Prozent: ${(frac*100).toFixed(2)}%`
    document.querySelector("#grade").innerHTML = `Note: ${((1-points / total)*5+1).toFixed(2)}`
}

let pkt = document.querySelector("#pkt");
let pktT =  document.querySelector("#pktTotal");

function updatePkt() {
    let pr = pkt.value;
    let pp = parseInt(pr);
    if (!isNaN(pp) && pp >= 0) {
        points = pp;
        frac = points / total;
    }
}

function updatePktT() {
    let pr = pktT.value;
    let pp = parseInt(pr);
    if (!isNaN(pp) && pp >= 0) {
        total = pp;
        frac = points / total;
    }
}
updatePkt()
updatePktT()

pkt.addEventListener("change", function(ev) {
    updatePkt();
    update();
})
document.querySelector("#pktTotal").addEventListener("change", function(ev) {
    updatePktT();
    update();
})