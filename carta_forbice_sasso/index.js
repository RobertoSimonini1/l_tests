const symbols = [
    {
        id: 0,
        key: 'sasso',
        beats: 'forbice'
    },
    {
        id: 1,
        key: 'forbice',
        beats: 'carta'
    },
    {
        id: 2,
        key: 'carta',
        beats: 'sasso'
    }
]

// nodes
const modeButtons = document.querySelectorAll("button.mode")
const keyButtonsSection = document.getElementById('key-buttons')
const modeSection = document.getElementById('mode')
const choiceButtons = document.querySelectorAll("button.choice")
const result = document.getElementById('result')
const playAgainButton = document.getElementById('play-again')
const computerVsComputerButton = document.getElementById('computer')


let mode = undefined;
let humanChoice = '';


const chooseMode = (choosenMode) => {
    mode = choosenMode
    modeButtons.forEach((button) => button.classList.add('visually-hidden'))
    modeSection.classList.add('visually-hidden')

    if (mode === 'human') {
        keyButtonsSection.classList.remove('visually-hidden')
    } else {
        computerVsComputerButton.classList.remove('visually-hidden')
    }
}


const generateTwoRandomNumbers = () => {
    const random = Math.floor(Math.random() * (symbols.length))
    const random2 = Math.floor(Math.random() * (symbols.length))

    return [random, random2]
}

const playComputerVsComputer = () => {
    const [random, random2] = generateTwoRandomNumbers()

    // pareggio
    if (random === random2) {
        result.innerHTML = `il player 1 ha scelto ${symbols[random].key}, il player 2 ha scelto ${symbols[random2].key} quindi il risultato è un pareggio`
        return
    }

    const key1 = symbols.find((element) => element.id === random)
    const key2 = symbols.find((element) => element.id === random2)

    if (key1.beats === key2.key) {
        // player 1 vince
        result.innerHTML = `il player 1 ha scelto ${key1.key}, il player 2 ha scelto ${key2.key}, il player 1 ha vinto`
        return
    } else {
        // player 2 vince
        result.innerHTML = `il player 1 ha scelto ${key1.key}, il player 2 ha scelto ${key2.key}, il player 2 ha vinto`
        return
    }
}

const playVsComputer = () => {
    // Human vs Computer
    const computerChoice = Math.floor(Math.random() * (symbols.length))
    const userKey = symbols.find((symbol) => symbol.key === humanChoice)

    choiceButtons.forEach((button) => button.classList.add('visually-hidden'))

    // pareggio
    if (userKey.id === computerChoice) {
        result.innerHTML = `tu hai scelto ${userKey.key}, il computer ha scelto ${symbols[computerChoice].key}, pareggio`
        return
    }

    // vittoria
    if (userKey.beats === symbols[computerChoice].key) {
        result.innerHTML = `tu hai scelto ${userKey.key}, il computer ha scelto ${symbols[computerChoice].key}, hai vinto :)`
        return
    }

    // sconfitta
    result.innerHTML = `tu hai scelto ${userKey.key}, il computer ha scelto ${symbols[computerChoice].key}, hai perso, riprova, sarai più fortunato :(`
}


const getResult = () => {
    // Computer vs Computer
    if (mode === 'computer') {
        playComputerVsComputer()
        playAgainButton.classList.remove('visually-hidden')
        return
    }


    // Human vs Computer
    if (mode === 'human') {
        playVsComputer()
        playAgainButton.classList.remove('visually-hidden')
        return
    }
}

const playAgain = () => {
    playAgainButton.classList.add('visually-hidden')
    result.innerHTML = ''
    choiceButtons.forEach((button) => button.classList.remove('visually-hidden'))
}

const chooseChoice = (choice) => {
    humanChoice = choice;
    getResult()
}