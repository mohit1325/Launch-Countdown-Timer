let DataController = function () {
    let days = "14";
    let hours = "00";
    let minutes = "00";
    let seconds = "00";
    return {
        getDays: () => days,
        getHours: () => hours,
        getMinutes: () => minutes,
        getSeconds: () => seconds,
        setSeconds: (second) => seconds = second,
        setHours: (hr) => hours = hr,
        setMinutes: (mn) => minutes = mn,
        setDays: (day) => days = day
    }
};

let UIController = function () {
    let dayPlaceHolder = document.getElementById("days");
    let hourPlaceHolder = document.getElementById('hours');
    let minutesPlaceHolder = document.getElementById('minutes');
    let secondsPlaceHolder = document.getElementById('seconds');
    return {
        getDayPlaceholder: () => dayPlaceHolder,
        getHourPlaceholder: () => hourPlaceHolder,
        getMinutesPlaceholder: () => minutesPlaceHolder,
        getSecondsPlaceholder: () => secondsPlaceHolder,
        setDayPlaceholder: (value) => dayPlaceHolder.innerHTML = value,
        setHourPlaceholder: (value) => hourPlaceHolder.innerHTML = value,
        setMinutesPlaceholder: (value) => minutesPlaceHolder.innerHTML = value,
        setSecondsPlaceholder: (value) => secondsPlaceHolder.innerHTML = value,
    }
};

(() => {
    window.addEventListener('load', (params) => {
        let uiController = new UIController();
        let dataController = new DataController();
        uiController.setDayPlaceholder(dataController.getDays());
        uiController.setHourPlaceholder(dataController.getHours());
        uiController.setMinutesPlaceholder(dataController.getMinutes());
        uiController.setSecondsPlaceholder(dataController.getSeconds());
        let countDownBegin = setInterval(condition, 1000, uiController, dataController);
        function condition() {
            let days = +dataController.getDays();
            let hours = +dataController.getHours();
            let minutes = +dataController.getMinutes();
            let seconds = +dataController.getSeconds();
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                } else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 23;
                        if (days > 0) {
                            days--;
                        } else {
                            minutes = "00"; seconds = "00"; hours = "00"; days = "00";
                            clearInterval(countDownBegin);
                        }
                    }
                }
            }
            days = days < 10 ? "0".concat(days.toString()) : days.toString();
            hours = hours < 10 ? "0".concat(hours.toString()) : hours.toString();
            minutes = minutes < 10 ? "0".concat(minutes.toString()) : minutes.toString();
            seconds = seconds < 10 ? "0".concat(seconds.toString()) : seconds.toString();
            uiController.setDayPlaceholder(days);
            uiController.setHourPlaceholder(hours);
            uiController.setMinutesPlaceholder(minutes);
            uiController.setSecondsPlaceholder(seconds);
            dataController.setDays(days);
            dataController.setHours(hours);
            dataController.setMinutes(minutes);
            dataController.setSeconds(seconds);
        }
    });
})();
