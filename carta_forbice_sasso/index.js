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

const generateTwoRandomNumbers = () => {
    const random = Math.floor(Math.random() * (symbols.length))
    const random2 = Math.floor(Math.random() * (symbols.length))

    return [random, random2]
}


const getResult = () => {
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


getResult()