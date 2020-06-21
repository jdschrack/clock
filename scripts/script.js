const deg = 6;
const hour = document.querySelector('#hr');
const minute = document.querySelector('#min');
const second = document.querySelector('#sec');
const detail = document.querySelector("#detail");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    minute.style.transform = `rotateZ(${(mm)}deg)`;
    second.style.transform = `rotateZ(${(ss)}deg)`;

    detail.innerHTML = `<h2>${day.toLocaleTimeString()}</h2>
    <p>${timeZone(day)}</p>`;
});

function timeZone(date) {
    return /\((.*)\)/.exec(date.toString())[1]
}
