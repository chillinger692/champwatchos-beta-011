radio.onReceivedNumber(function (receivedNumber) {
    if (rmessage1 == 0) {
        rmessage1 = receivedNumber
    } else if (rmessage2 == 0) {
        rmessage2 = receivedNumber
    } else if (rmessage3 == 0) {
        rmessage3 = receivedNumber
    } else if (rmessage4 == 0) {
        rmessage4 = receivedNumber
    } else if (rmessage5 == 0) {
        rmessage5 = receivedNumber
    } else if (rmessage6 == 0) {
        rmessage6 = receivedNumber
    } else {
        basic.showString("Inbox full")
    }
})
input.onButtonPressed(Button.A, function () {
    if (appno == 0) {
        if (appID == -100) {
            hourcalib += 1
            time = "" + hourcalib + ":" + ("" + minutecalib)
            if (hourcalib == 24) {
                hourcalib = 0
            }
            basic.showString(time, 30)
        }
        if (appID % 7 == 6) {
            appID += 1
        }
        if (appID % 7 == 5) {
            appID += 1
            basic.showLeds(`
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                `)
        }
        if (appID % 7 == 4) {
            appID += 1
            basic.showLeds(`
                . . . . .
                # # # # #
                # . # . #
                # # # # #
                # . . . #
                `)
        }
        if (appID % 7 == 3) {
            appID += 1
            basic.showLeds(`
                . # # # .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                `)
        }
        if (appID % 7 == 2) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                `)
        }
        if (appID % 7 == 1) {
            appID += 1
            basic.showIcon(IconNames.Heart)
        }
        if (appID % 7 == 0) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                `)
        }
    }
    if (appno == 2) {
        basic.showNumber(stepcounter)
    }
    if (appno == 1) {
        if (appID == 53) {
            appID += -3
        }
        if (appID == 52) {
            appID += 1
            basic.showLeds(`
                . # # # .
                . . # . #
                . # # # .
                . # . # .
                . # # # .
                `)
        }
        if (appID == 51) {
            appID += 1
            basic.showLeds(`
                # # . # #
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (appID == 50) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                `)
        }
    }
    if (appno == 11) {
        timerstart = input.runningTime()
    }
    if (appno == 12) {
        if (mincalibtimer < 60) {
            mincalibtimer += 10
        }
    }
    if (appno == 5) {
        if (appID == 63) {
            appID += -3
        }
        if (appID == 62) {
            appID += 1
            basic.showLeds(`
                # # # # #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
        }
        if (appID == 61) {
            appID += 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (appID == 60) {
            appID += 1
            basic.showLeds(`
                # # # . #
                # . # # .
                # # # . .
                # . # # .
                # # # . #
                `)
        }
    }
    if (appno == 40) {
        if (rps == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (rps == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        }
        if (rps == 3) {
            basic.showLeds(`
                # # # . #
                # . # # .
                # # # . .
                # . # # .
                # # # . #
                `)
        }
    }
    if (appno == 42) {
        _7sstart = input.runningTime()
        basic.showIcon(IconNames.Chessboard)
    }
    if (appno == 41) {
        basic.showString("Wait until Beta 0.11")
    }
    if (appno == 6) {
        if (appID == 83) {
            appID = 80
        }
        if (appID == 82) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                `)
        }
        if (appID == 81) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . . . #
                # # # # #
                `)
        }
        if (appID == 80) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                `)
        }
    }
    if (appno == 60) {
        appID += -180
    }
    if (appno == 61) {
        input.calibrateCompass()
    }
    if (appno == 3) {
        if (appID == 72) {
            appID = 70
        }
        if (appID == 71) {
            basic.showLeds(`
                # # # # #
                # # . # #
                # . # . #
                # . . . #
                # # # # #
                `)
            appID = 72
        }
        if (appID == 70) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                `)
            appID = 71
        }
    }
    if (appno == 30) {
        if (messagesymbol == 32) {
            messagesymbol = 21
        }
        if (messagesymbol == 31) {
            basic.showString("Cool")
            messagesymbol = 31
        }
        if (messagesymbol == 30) {
            basic.showString("Wow")
            messagesymbol = 30
        }
        if (messagesymbol == 29) {
            basic.showString("Hi")
            messagesymbol = 29
        }
        if (messagesymbol == 28) {
            basic.showString("Hello")
            messagesymbol = 28
        }
        if (messagesymbol == 27) {
            basic.showString("Zzz")
            messagesymbol = 27
        }
        if (messagesymbol == 26) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            messagesymbol = 26
        }
        if (messagesymbol == 25) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            messagesymbol = 25
        }
        if (messagesymbol == 24) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                `)
            messagesymbol = 24
        }
        if (messagesymbol == 23) {
            basic.showString("How are you")
            messagesymbol = 23
        }
        if (messagesymbol == 22) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                `)
            messagesymbol = 22
        }
        if (messagesymbol == 21) {
            basic.showLeds(`
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                `)
            messagesymbol = 20
        }
    }
    if (appno == 31) {
        if (messageid == 4) {
            messageid += -3
        }
        if (messageid == 3) {
            basic.showNumber(3)
            messageid += 1
        }
        if (messageid == 2) {
            basic.showNumber(2)
            messageid += 1
        }
        if (messageid == 1) {
            basic.showNumber(1)
            messageid += 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (appID == -100) {
        basic.showString(time, 80)
appID = 0
    }
    if (appID == 0) {
        basic.showString(time, 80)
    }
    if (appno != 0) {
        appno = 0
        appID = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (appID == -100) {
        minutecalib += 1
        time = "" + hourcalib + ":" + ("" + minutecalib)
        if (minutecalib == 60) {
            minutecalib = 0
        }
        basic.showString(time ,30)
    }
    if (appID == 0) {
        appID = -1
    }
    if (appID % 7 == 1) {
        appno = 1
        appID = 51
        basic.showLeds(`
            # # . # #
            # # # # #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (appID % 7 == 2) {
        appno = 2
    }
    if (appID % 7 == 3) {
        appno = 3
        appID = 70
    }
    if (appID % 7 == 4) {
        appno = 4
    }
    if (appID % 7 == 5) {
        appno = 5
        appID = 62
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (appID % 7 == 0) {
        appno = 6
        appID = 81
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (appno == 2) {
        basic.showString("" + walkingDistance + "/" + ("" + runningDistance))
    }
    if (appID == 50) {
        appno = 10
    }
    if (appID == 51) {
        appno = 11
    }
    if (appID == 52) {
        appno = 12
    }
    if (appno == 11) {
        elapsed = input.runningTime() - timerstart
        basic.showNumber(Math.trunc(elapsed))
    }
    if (appno == 12) {
        if (mincalibtimer < 60) {
            mincalibtimer += 1
        }
    }
    if (appID == 60) {
        appno = 40
    }
    if (appID == 61) {
        appno = 41
    }
    if (appID == 62) {
        appno = 42
    }
    if (appID == 80) {
        appno = 60
    }
    if (appID == 81) {
        appno = 61
    }
    if (appID == 82) {
        appno = 62
    }
    if (rps == 1) {
        userplayedrps = 1
    }
    if (rps == 2) {
        userplayedrps = 2
    }
    if (rps == 3) {
        userplayedrps = 3
    }
    if (appno == 42) {
        _7stime = input.runningTime() - _7sstart
        _7sscore = 100 - Math.abs(_7stime - 7000)
        basic.showNumber(_7sscore)
    }
    if (appID == 70) {
        appno = 30
    }
    if (appID == 71) {
        appno = 31
    }
    if (messagesymbol == 20) {
        radio.sendNumber(20)
    }
    if (messagesymbol == 21) {
        radio.sendNumber(21)
    }
    if (messagesymbol == 22) {
        radio.sendNumber(22)
    }
    if (messagesymbol == 23) {
        radio.sendNumber(23)
    }
    if (messagesymbol == 24) {
        radio.sendNumber(24)
    }
    if (messagesymbol == 25) {
        radio.sendNumber(25)
    }
    if (messagesymbol == 26) {
        radio.sendNumber(26)
    }
    if (messagesymbol == 27) {
        radio.sendNumber(27)
    }
    if (messagesymbol == 28) {
        radio.sendNumber(28)
    }
    if (messagesymbol == 29) {
        radio.sendNumber(29)
    }
    if (messagesymbol == 30) {
        radio.sendNumber(30)
    }
    if (messagesymbol == 31) {
        radio.sendNumber(31)
    }
    if (appno == 30) {
        if (rmessage1 == 31) {
            basic.showString("Cool")
        }
        if (rmessage1 == 30) {
            basic.showString("Wow")
        }
        if (rmessage1 == 29) {
            basic.showString("Hi")
        }
        if (rmessage1 == 28) {
            basic.showString("Hello")
        }
        if (rmessage1 == 27) {
            basic.showString("Zzz")
        }
        if (rmessage1 == 26) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (rmessage1 == 25) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        }
        if (rmessage1 == 24) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                `)
        }
        if (rmessage1 == 23) {
            basic.showString("How are you")
        }
        if (rmessage1 == 22) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (rmessage1 == 21) {
            basic.showLeds(`
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
    if (appno == 30) {
        if (rmessage2 == 31) {
            basic.showString("Cool")
        }
        if (rmessage2 == 30) {
            basic.showString("Wow")
        }
        if (rmessage2 == 29) {
            basic.showString("Hi")
        }
        if (rmessage2 == 28) {
            basic.showString("Hello")
        }
        if (rmessage2 == 27) {
            basic.showString("Zzz")
        }
        if (rmessage2 == 26) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (rmessage2 == 25) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        }
        if (rmessage2 == 24) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                `)
        }
        if (rmessage2 == 23) {
            basic.showString("How are you")
        }
        if (rmessage2 == 22) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (rmessage2 == 21) {
            basic.showLeds(`
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
    if (appno == 30) {
        if (rmessage3 == 31) {
            basic.showString("Cool")
        }
        if (rmessage3 == 30) {
            basic.showString("Wow")
        }
        if (rmessage3 == 29) {
            basic.showString("Hi")
        }
        if (rmessage3 == 28) {
            basic.showString("Hello")
        }
        if (rmessage3 == 27) {
            basic.showString("Zzz")
        }
        if (rmessage3 == 26) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (rmessage3 == 25) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        }
        if (rmessage3 == 24) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                `)
        }
        if (rmessage3 == 23) {
            basic.showString("How are you")
        }
        if (rmessage3 == 22) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (rmessage3 == 21) {
            basic.showLeds(`
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
let compplayedrps = 0
let _7sscore = 0
let _7stime = 0
let userplayedrps = 0
let elapsed = 0
let messageid = 0
let messagesymbol = 0
let _7sstart = 0
let rps = 0
let timerstart = 0
let rmessage6 = 0
let rmessage5 = 0
let rmessage4 = 0
let mincalibtimer = 0
let appno = 0
let stepcounter = 0
let runningDistance = 0
let walkingDistance = 0
let appID = 0
let rmessage3 = 0
let rmessage2 = 0
let rmessage1 = 0
let minutecalib = 0
let hourcalib = 0
let stopwatchmin = 0
let time = ""
let walkingDistanceMiles = 0
let runningDistanceMiles = 0
let hourcalibtimer = 0
let dotscore = 0
let sprite = 0
basic.showString("ChampCo SmartWatch Beta.", 75)
input.calibrateCompass()
radio.setGroup(109)
basic.showString("What is the time?", 75)
hourcalib = 0
minutecalib = 0
rmessage1 = 0
rmessage2 = 0
rmessage3 = 0
appID = -100
walkingDistance = 0
runningDistance = 0
let degrees = input.compassHeading()
stepcounter = 0
appno = 0
time = "" + hourcalib + ":" + ("" + minutecalib)
mincalibtimer = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) >= 1500 && input.acceleration(Dimension.Strength) < 2000) {
        stepcounter += 1
        walkingDistance += 0.0006
    }
    if (input.acceleration(Dimension.Strength) >= 2000) {
        stepcounter += 1
        runningDistance += 0.0007
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(60000)
    minutecalib += 1
    if (minutecalib == 60) {
        hourcalib += 1
        minutecalib = 0
    }
    if (hourcalib == 24) {
        hourcalib += 0
    }
})
basic.forever(function () {
    if (appID == 50) {
        basic.showString(time, 80)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (appno == 4) {
        if (degrees > 0) {
            basic.showString("" + degrees + ":" + "N", 80)
        } else if (degrees > 22) {
            basic.showString("" + degrees + ":" + "NE", 80)
        } else if (degrees > 67) {
            basic.showString("" + degrees + ":" + "E", 80)
        } else if (degrees > 112) {
            basic.showString("" + degrees + ":" + "SE", 80)
        } else if (degrees > 157) {
            basic.showString("" + degrees + ":" + "S", 80)
        } else if (degrees > 202) {
            basic.showString("" + degrees + ":" + "SW", 80)
        } else if (degrees > 247) {
            basic.showString("" + degrees + ":" + "W", 80)
        } else if (degrees > 292) {
            basic.showString("" + degrees + ":" + "NW" , 80)
        } else {
            basic.showString("" + degrees + ":" + "N" , 80)
        }
    }
})
basic.forever(function () {
    if (stopwatchmin != 0 && stopwatchmin != 1) {
        basic.pause(60000)
        stopwatchmin += -1
    }
    if (stopwatchmin = 1) {
        basic.pause(60000)
        stopwatchmin += -1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (minutecalib < 10 && !(hourcalib < 10)) {
        time = "" + hourcalib + ":" + ("0" + ("" + minutecalib))
    }
    if (minutecalib >= 10 && !(hourcalib < 10)) {
        time = "" + hourcalib + ":" + ("" + minutecalib)
    }
    if (minutecalib < 10 && !(hourcalib >= 10)) {
        time = "0" + ("" + hourcalib) + ":" + ("0" + ("" + minutecalib))
    }
    if (minutecalib >= 10 && !(hourcalib >= 10)) {
        time = "0" + ("" + hourcalib) + ":" + ("" + minutecalib)
    }
})
basic.forever(function () {
    if (appno == 40) {
        compplayedrps = randint(1, 3)
    }
    if (compplayedrps == userplayedrps && rps) {
        basic.showString("Draw")
    }
    if (compplayedrps == 1 && userplayedrps == 2 || (compplayedrps == 2 && userplayedrps == 3 || compplayedrps == 3 && userplayedrps == 1)) {
        basic.showString("Win")
    }
    if (compplayedrps == 2 && userplayedrps == 1 || (compplayedrps == 3 && userplayedrps == 2 || compplayedrps == 1 && userplayedrps == 3)) {
        basic.showString("Lose")
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        if (appno == 12) {
            if (stopwatchmin == 0) {
                stopwatchmin = mincalibtimer
            }
            basic.showNumber(stopwatchmin)
        }
    }
})
