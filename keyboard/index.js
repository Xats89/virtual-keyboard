let body = document.querySelector('.body').innerHTML = `<textarea name="inputText" class="area" cols="30" rows="10"></textarea>
<div class="keyboard"></div>
<p.text> Смена языка происходит нажатием клавиш AltLeft + ControlLeft </p>` 

let arrEn =     ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
let arrRus =    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
let arrCode =       ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
let arrCodeRus =    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

let arrowLeft = '<img class="img" src="img/icons8-налево-96.png" alt="Left">'
let arrowUp = '<img class="img" src="img/icons8-вверх-96.png" alt="Up">'
let arrowDown = '<img class="img" src="img/icons8-вниз-96.png" alt="Left">'
let arrowRight = '<img class="img" src="img/icons8-направо-96.png" alt="Left">'
let win = '<img class="img" src="img/win.png" alt="Win">'

const textArea = document.querySelector('.area')

// document.onkeydown = (event) => {
//     // console.log(event.key)
//     arrCodeRus.push(event.code)
//     console.log(arrCodeRus);
// }

let langCount = 1

function init(lang) {

    langCount % 2 == 0 ? lang = arrRus : lang = arrEn
    let out = '';
    for (let i = 0; i < lang.length; i++) {
        // разделяю на строки
        if (i == 14 || i == 29 || i == 42 || i == 55) out += '<div class="clearfix"></div>';

        if (lang[i] == 'Delete' 
        || lang[i] == 'Ctrl' 
        || lang[i] == 'Alt') {
            out += '<div class="keyboard-key funKey" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
        else if (lang[i] == 'Tab'){
            out += '<div class="keyboard-key funKey tab" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
        else if (lang[i] == 'CapsLock'){
            out += '<div class="keyboard-key funKey bigKey caps" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
        else if (lang[i] == 'Backspace'
        || lang[i] == 'CapsLock' 
        || lang[i] == 'Enter' 
        || lang[i] == 'Shift' 
        ) {
            out += '<div class="keyboard-key funKey bigKey" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
        else if (lang[i] == ' ') {
            out += '<div class="keyboard-key funKey spaceKey" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
        else if (lang[i] == 'ArrowUp' 
        || lang[i] == 'ArrowLeft' 
        || lang[i] == 'ArrowDown' 
        || lang[i] == 'ArrowRight'
        || lang[i] == 'Meta') {
            if (lang[i] == 'ArrowUp') {
                out += '<div class="keyboard-key funKey" data="'+arrCode[i]+'">' + arrowUp + '</div>';
            }
            if (lang[i] == 'ArrowLeft') {
                out += '<div class="keyboard-key funKey" data="'+arrCode[i]+'">' + arrowLeft + '</div>';
            }
            if (lang[i] == 'ArrowDown') {
                out += '<div class="keyboard-key funKey" data="'+arrCode[i]+'">' + arrowDown + '</div>';
            }
            if (lang[i] == 'ArrowRight') {
                out += '<div class="keyboard-key funKey" data="'+arrCode[i]+'">' + arrowRight + '</div>';
            }
            if (lang[i] == 'Meta') {
                out += '<div class="keyboard-key funKey" data="'+arrCode[i]+'">' + win + '</div>';
            }
        }
        else if (lang[i] == '`'){
            out += '<div class="keyboard-key letter funKey" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
        else {
            out += '<div class="keyboard-key letter" data="'+ arrCode[i] +'">' + (lang[i]) + '</div>';
        }
    }
    document.querySelector('.keyboard').innerHTML = out

    let kKey = document.querySelectorAll('.keyboard-key')
    let capsLock = document.querySelector('.caps') 
    let letter = document.querySelectorAll('.letter') 
    
    document.onkeydown = function (event) {
        if (event.code == 'CapsLock') {
            capsLock.classList.toggle('active')
            if(capsLock.classList.contains('active')) {
                console.log('asdas')
                letter.forEach((el) => {
                    el.textContent = el.textContent.toUpperCase()
                })
            }else{
                letter.forEach((el) => {
                    el.textContent = el.textContent.toLowerCase()
                })
            }
        } else {
            document.querySelector(`.keyboard-key[data="${event.code}"]`).classList.add('active')
        }
        if (document.querySelector(`.keyboard-key[data="AltLeft"]`).classList.contains('active') 
        && document.querySelector(`.keyboard-key[data="ControlLeft"]`).classList.contains('active')) {
            langCount+=1
            init()
        }
    }
    document.onkeyup = function (event) {
        if (event.code == 'CapsLock') {
            null
        } else {
            document.querySelector(`.keyboard-key[data="${event.code}"]`).classList.remove('active')
        }
    }
    
    kKey.forEach((el) => {
    
        if (el.classList.contains('caps')) {
            el.addEventListener('click', () => {
                el.classList.toggle('active')
                if(el.classList.contains('active')) {
                    letter.forEach((el) => {
                        el.textContent = el.textContent.toUpperCase()
                    })
                }else{
                    letter.forEach((el) => {
                        el.textContent = el.textContent.toLowerCase()
                    })
                }
            })
        }
        else {
            el.addEventListener('mousedown', () => {
                el.classList.add('active')
                textArea.value += el.textContent
                console.log (textArea)
            })
            el.addEventListener('mouseup', () => {
               el.classList.remove('active')
            })
            el.addEventListener('mouseout', () => {
                el.classList.remove('active')
             })
        }
    })

}

init()
// langCount % 2 == 0 ? init(arrRus) : init(arrEn)



