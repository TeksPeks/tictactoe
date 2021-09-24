let cells = []
let win = document.getElementsByClassName('win')
let lastSymbol = 'X'
let fields = ['', '', '', '', '', '', '', '', '']
let lastClicked = -2
let clicked = [false, false, false, false, false, false, false, false, false]
let winner = ''

for (let i = 0; i < 9; i++) {
    cells.push(document.getElementById(`cell${i+1}`))
}

const restart = () => {
    lastSymbol = 'X'
    fields = ['', '', '', '', '', '', '', '', '']
    lastClicked = -2
    clicked = [false, false, false, false, false, false, false, false, false]
    winner = ''
    win[0].classList.add('none')
    cells.map((el, i) => {
        el.onclick = () => click(i)
    })
    render()
}


const render = () => {
    cells.map((el, i) => {
        el.textContent = fields[i]
    });
    if (winner) {
        cells.map(el => el.onclick = null)
        win[0].innerHTML = `${winner} won`
        win[0].classList.remove('none')
        win[0].onclick = restart
    }
}

const checkWinner = () => {
    if (fields[0] == fields[1] && fields[0] == fields[2]) {
        winner = fields[0]
    } else if (fields[3] == fields[4] && fields[3] == fields[5]) {
        winner = fields[3]
    } else if (fields[6] == fields[7] && fields[6] == fields[8]) {
        winner = fields[6]
    }

    if (fields[0] == fields[3] && fields[0] == fields[6]){
        winner = fields[0]
    } else if (fields[1] == fields[4] && fields[1] == fields[7]){
        winner = fields[1]
    } else if (fields[2] == fields[5] && fields[2] == fields[8]){
        winner = fields[2]
    }

    if (fields[0] == fields[4] && fields[0] == fields[8] || fields[2] == fields[4] && fields[2] == fields[6]) {
        winner = fields[4]
    }
}

const click = (i) => {
    if (clicked[i]) return

    // if (i == lastClicked) {
    //     fields[i] = ''
    //     lastClicked = -1
    // } else {
        fields[i] = lastSymbol
        // lastClicked = i
        clicked[i] = true
    //}
    lastSymbol = lastSymbol == 'X' ? 'O' : 'X'
    checkWinner()
    render()
}



cells.map((el, i) => {
    el.onclick = () => click(i)
})


render()