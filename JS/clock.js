
const hourHand = document.querySelector('[data-hour-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

const setClock = () => {
    const currentDate = new Date();
    console.log(currentDate)
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondsHand, secondsRatio)
    setRotation(minutesHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000);

setClock()