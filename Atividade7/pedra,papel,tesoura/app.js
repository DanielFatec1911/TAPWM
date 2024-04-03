const buttons = document.querySelectorAll('.options button');
const resultDiv = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.textContent;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        displayResult(playerChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    // Gerar um número aleatório entre 0 e 0.99

    const randomNum = Math.random();
    

    if (randomNum < 0.33) {
        return 'Pedra';
    } else if (randomNum < 0.66) {
        return 'Papel';
    } else {
        return 'Tesoura';
    }
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Empate';
    } else if (
        (player === 'Pedra' && computer === 'Tesoura') ||
        (player === 'Papel' && computer === 'Pedra') ||
        (player === 'Tesoura' && computer === 'Papel')
    ) {
        playerScore++;
        return 'Jogador venceu!';
    } else {
        computerScore++;
        return 'Computador venceu!';
    }
}

function displayResult(player, computer, winner) {
    resultDiv.innerHTML = `
        <p>Jogador escolheu: ${player}</p>
        <p>Computador escolheu: ${computer}</p>
        <p>${winner}</p>
        <p>Pontuação: Jogador ${playerScore} - ${computerScore} Computador</p>
    `;
}
