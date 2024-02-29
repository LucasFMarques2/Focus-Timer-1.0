import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
    state.isRunnig = document.documentElement.classList.toggle('running')
    timer.countdown()
    

}

export function setTimer() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function reset() {
    state.isRunnig = false
    document.documentElement.classList.remove('running')
    state.minutes = 0
    state.seconds = 0

    timer.updateDisplay()


}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.bgSounds.play()
        return
    }

    sounds.bgSounds.pause()
    sounds.buttonPressAudio.pause()
}

