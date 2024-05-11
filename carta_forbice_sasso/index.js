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


let mode = undefined;
let humanChoice = '';


const chooseMode = (choosenMode) => {
    mode = choosenMode
    modeButtons.forEach((button) => button.classList.add('visually-hidden'))

    if (mode === 'human') {
        keyButtonsSection.classList.remove('visually-hidden')
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
        console.log(random, random2, 'pareggio')
        return
    }

    const key1 = symbols.find((element) => element.id === random)
    const key2 = symbols.find((element) => element.id === random2)

    if (key1.beats === key2.key) {
        // vittoria
        console.log(key1.key, key2.key, 'Hai Vinto :)')
        return
    } else {
        // sconfitta
        console.log(key1.key, key2.key, 'Hai perso, riprova, sarai più fortunato :(')
        return
    }
}

const playVsComputer = () => {
    // Human vs Computer
    const computerChoice = Math.floor(Math.random() * (symbols.length))
    const userKey = symbols.find((symbol) => symbol.key === humanChoice)

    // pareggio
    if (userKey.id === computerChoice) {
        console.log(`tu hai scelto ${userKey.key}, il computer ha scelto ${symbols[computerChoice].key}, pareggio`)
        return
    }

    // vittoria
    if (userKey.beats === symbols[computerChoice].key) {
        console.log(`tu hai scelto ${userKey.key}, il computer ha scelto ${symbols[computerChoice].key}, Hai Vinto :)`)
        return
    }

    // sconfitta
    console.log(`tu hai scelto ${userKey.key}, il computer ha scelto ${symbols[computerChoice].key}, Hai perso, riprova, sarai più fortunato :(`)
}


const getResult = () => {
    // Computer vs Computer
    if (mode === 'computer') {
        playComputerVsComputer()
        return
    }


    // Human vs Computer
    if (mode === 'human') {
        playVsComputer()
        return
    }
}

const chooseChoice = (choice) => {
    humanChoice = choice;
    getResult()
}