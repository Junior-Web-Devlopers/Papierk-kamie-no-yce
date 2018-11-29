const gameSummary = {
    wins: 0,
    losses: 0,
    draws: 0, // określam zmienne tzn wartości dla których będą brane wygrane przegrane oraz remisy
}
game = {
    winner: "",
    playerHand: "",
    aiHand: "", // tutaj podobnie tylko że tutaj mamy określenie kto wygrał
}
// tutaj miałem pobierać zdjęcia ale mnie wyprzedziłeś i nadałeś im kozacką animację :P
const hands = document.querySelectorAll("section img");
const button = document.getElementById("play"); //pobranie przyciski

const winners =
    document.querySelector(".winner");
// pobranie sekcji "Zwyciężca"

const wygrane =
    document.querySelector(".options"); // pobranie elementu  Wygrane
const przegrane = document.querySelector(".options:nth-child(3)");
//pobranie elementu przegrane
const remisy = document.querySelector(`.options:nth-child(4)`);
// pobranie elementu remisy;
function chceckResults(player, ai) {
    if (player === ai) {
        return "draw"
    } else if (player === `papier` && ai === `kamień`) {
        return "win"
    } else if (player === `nożyczki` && ai === `papier`) {
        return "win"
    } else if (player === `kamień` && ai === `nożyczki`) {
        return "win"
    } else {
        return "loss"
    }
} //sprawdzenie tego kto wygrał else odnosi się do wszystkich 3 sytuacji jak wygrywa komputer
function publishResult(result) {
    if (result === "win") {
        wygrane.textContent =
            `Wygrane ${++gameSummary.wins}`;
        winners.textContent = `Zwyciężca: "Ty!!!"`;
        winners.color = "red"
    } else if (result === "loss") {
        przegrane.textContent =
            `Przegrane ${++gameSummary.losses}`;
        winners.textContent = `Zwyciężca: Komputer :()`;
        winners.style.color = "black"
    } else remisy.textContent =
        `Remisy ${++gameSummary.draws}`;
    winners.textContent = `Zwyciężca: Remis :/`;
    winners.style.color = "grey"

}

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
} // wybieranie opcji przez komputer
const start = () => {
    if (!game.playerHand) {;
        alert("wybierz jakąś dłoń")
    }
    //funkcja sterująca która mówi czy wybraliśmy dłoń jak nie to wyświetla alert

    function endGame() {
        game.playerHand = ""
    } // zakończenie funkcji po kliknięciu przycisku (jak nie wiesz o co chodzi to pytaj :P)

    game.aiHand = aiChoice();
    const gameResult = chceckResults(game.playerHand, game.aiHand);
    // console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame()
} // Funkcja podsumowywująca wszyskie rzeczy która również wywołuje funkcje tutaj podobnie jeżeli nie za bardzo wiesz o co chodzi to pytaj na fb :)

const photo = (e) => {
    game.playerHand = e.target;
    console.log(game.playerHand)
} //odwoływanie się do zdjęcia przez jego kliknięcie 


hands.forEach(img => img.addEventListener("click", photo))
button.addEventListener("click", start);
// pobranie elementu button który będzie rozpoczynał grę