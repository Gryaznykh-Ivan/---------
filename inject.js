
const start = () => {
    if (window.location.href.indexOf("auction.php") === -1) return

    const pricePlace = Array.from(document.querySelectorAll("table td img")).filter(e => e.src.indexOf("gold") !== -1).map(e => e.parentElement.nextSibling).splice(1)

    const costStrings = pricePlace.map(e => e.textContent)
    const durabilityStrings = Array.from(document.querySelectorAll(".art_durability_hidden")).map(element => element.textContent)

    console.log(pricePlace)

    for (let i = 0; i < pricePlace.length; i++) {
        pricePlace[i].innerHTML = `${ costStrings[i] } (${(Number(costStrings[i].replace(",", "")) / Number(durabilityStrings[i].split("/")[0])).toFixed(1)})`
    }
}

setTimeout(start, 800)