def on_received_number(receivedNumber):
    global rmessage1, rmessage2, rmessage3, rmessage4, rmessage5, rmessage6
    if rmessage1 == 0:
        rmessage1 = receivedNumber
    elif rmessage2 == 0:
        rmessage2 = receivedNumber
    elif rmessage3 == 0:
        rmessage3 = receivedNumber
    elif rmessage4 == 0:
        rmessage4 = receivedNumber
    elif rmessage5 == 0:
        rmessage5 = receivedNumber
    elif rmessage6 == 0:
        rmessage6 = receivedNumber
    else:
        basic.show_string("Inbox full")
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global hourcalib, time, appID, timerstart, mincalibtimer, _7sstart, messagesymbol, messageid
    if appno == 0:
        if appID == -100:
            hourcalib += 1
            time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))
            if hourcalib == 24:
                hourcalib = 0
            basic.show_string(time, 30)
        if appID % 7 == 6:
            appID += 1
        if appID % 7 == 5:
            appID += 1
            basic.show_leds("""
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                """)
        if appID % 7 == 4:
            appID += 1
            basic.show_leds("""
                . . . . .
                # # # # #
                # . # . #
                # # # # #
                # . . . #
                """)
        if appID % 7 == 3:
            appID += 1
            basic.show_leds("""
                . # # # .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                """)
        if appID % 7 == 2:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                """)
        if appID % 7 == 1:
            appID += 1
            basic.show_icon(IconNames.HEART)
        if appID % 7 == 0:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                """)
    if appno == 2:
        basic.show_number(stepcounter)
    if appno == 1:
        if appID == 53:
            appID += -3
        if appID == 52:
            appID += 1
            basic.show_leds("""
                . # # # .
                . . # . #
                . # # # .
                . # . # .
                . # # # .
                """)
        if appID == 51:
            appID += 1
            basic.show_leds("""
                # # . # #
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                """)
        if appID == 50:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                """)
    if appno == 11:
        timerstart = input.running_time()
    if appno == 12:
        if mincalibtimer < 60:
            mincalibtimer += 10
    if appno == 5:
        if appID == 63:
            appID += -3
        if appID == 62:
            appID += 1
            basic.show_leds("""
                # # # # #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                """)
        if appID == 61:
            appID += 1
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        if appID == 60:
            appID += 1
            basic.show_leds("""
                # # # . #
                # . # # .
                # # # . .
                # . # # .
                # # # . #
                """)
    if appno == 40:
        if rps == 1:
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                """)
        if rps == 2:
            basic.show_leds("""
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                """)
        if rps == 3:
            basic.show_leds("""
                # # # . #
                # . # # .
                # # # . .
                # . # # .
                # # # . #
                """)
    if appno == 42:
        _7sstart = input.running_time()
        basic.show_icon(IconNames.CHESSBOARD)
    if appno == 41:
        basic.show_string("Wait until Beta 0.11")
    if appno == 6:
        if appID == 83:
            appID = 80
        if appID == 82:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                """)
        if appID == 81:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . # . #
                # . # . #
                # . . . #
                # # # # #
                """)
        if appID == 80:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                """)
    if appno == 60:
        appID += -180
    if appno == 61:
        input.calibrate_compass()
    if appno == 3:
        if appID == 72:
            appID = 70
        if appID == 71:
            basic.show_leds("""
                # # # # #
                # # . # #
                # . # . #
                # . . . #
                # # # # #
                """)
            appID = 72
        if appID == 70:
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                """)
            appID = 71
    if appno == 30:
        if messagesymbol == 32:
            messagesymbol = 21
        if messagesymbol == 31:
            basic.show_string("Cool")
            messagesymbol = 31
        if messagesymbol == 30:
            basic.show_string("Wow")
            messagesymbol = 30
        if messagesymbol == 29:
            basic.show_string("Hi")
            messagesymbol = 29
        if messagesymbol == 28:
            basic.show_string("Hello")
            messagesymbol = 28
        if messagesymbol == 27:
            basic.show_string("Zzz")
            messagesymbol = 27
        if messagesymbol == 26:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
            messagesymbol = 26
        if messagesymbol == 25:
            basic.show_leds("""
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                """)
            messagesymbol = 25
        if messagesymbol == 24:
            basic.show_leds("""
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                """)
            messagesymbol = 24
        if messagesymbol == 23:
            basic.show_string("How are you")
            messagesymbol = 23
        if messagesymbol == 22:
            basic.show_leds("""
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                """)
            messagesymbol = 22
        if messagesymbol == 21:
            basic.show_leds("""
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                """)
            messagesymbol = 20
    if appno == 31:
        if messageid == 4:
            messageid += -3
        if messageid == 3:
            basic.show_number(3)
            messageid += 1
        if messageid == 2:
            basic.show_number(2)
            messageid += 1
        if messageid == 1:
            basic.show_number(1)
            messageid += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global appID, appno
    if appID == -100:
        basic.show_string(time, 80)
        appID = 0
    if appID == 0:
        basic.show_string(time, 80)
    if appno != 0:
        appno = 0
        appID = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global minutecalib, time, appID, appno, elapsed, mincalibtimer, userplayedrps, _7stime, _7sscore
    if appID == -100:
        minutecalib += 1
        time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))
        if minutecalib == 60:
            minutecalib = 0
        basic.show_string(time, 30)
    if appID == 0:
        appID = -1
    if appID % 7 == 1:
        appno = 1
        appID = 51
        basic.show_leds("""
            # # . # #
            # # # # #
            # . . . #
            # . . . #
            # # # # #
            """)
    if appID % 7 == 2:
        appno = 2
    if appID % 7 == 3:
        appno = 3
        appID = 70
    if appID % 7 == 4:
        appno = 4
    if appID % 7 == 5:
        appno = 5
        appID = 62
        basic.show_leds("""
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
    if appID % 7 == 0:
        appno = 6
        appID = 81
        basic.show_leds("""
            # # # # #
            # # . # #
            # . # . #
            # . . . #
            # # # # #
            """)
    if appno == 2:
        basic.show_string("" + str(walkingDistance) + "/" + ("" + str(runningDistance)))
    if appID == 50:
        appno = 10
    if appID == 51:
        appno = 11
    if appID == 52:
        appno = 12
    if appno == 11:
        elapsed = input.running_time() - timerstart
        basic.show_number(int(elapsed))
    if appno == 12:
        if mincalibtimer < 60:
            mincalibtimer += 1
    if appID == 60:
        appno = 40
    if appID == 61:
        appno = 41
    if appID == 62:
        appno = 42
    if appID == 80:
        appno = 60
    if appID == 81:
        appno = 61
    if appID == 82:
        appno = 62
    if rps == 1:
        userplayedrps = 1
    if rps == 2:
        userplayedrps = 2
    if rps == 3:
        userplayedrps = 3
    if appno == 42:
        _7stime = input.running_time() - _7sstart
        _7sscore = 100 - abs(_7stime - 7000)
        basic.show_number(_7sscore)
    if appID == 70:
        appno = 30
    if appID == 71:
        appno = 31
    if messagesymbol == 20:
        radio.send_number(20)
    if messagesymbol == 21:
        radio.send_number(21)
    if messagesymbol == 22:
        radio.send_number(22)
    if messagesymbol == 23:
        radio.send_number(23)
    if messagesymbol == 24:
        radio.send_number(24)
    if messagesymbol == 25:
        radio.send_number(25)
    if messagesymbol == 26:
        radio.send_number(26)
    if messagesymbol == 27:
        radio.send_number(27)
    if messagesymbol == 28:
        radio.send_number(28)
    if messagesymbol == 29:
        radio.send_number(29)
    if messagesymbol == 30:
        radio.send_number(30)
    if messagesymbol == 31:
        radio.send_number(31)
    if appno == 30:
        if rmessage1 == 31:
            basic.show_string("Cool")
        if rmessage1 == 30:
            basic.show_string("Wow")
        if rmessage1 == 29:
            basic.show_string("Hi")
        if rmessage1 == 28:
            basic.show_string("Hello")
        if rmessage1 == 27:
            basic.show_string("Zzz")
        if rmessage1 == 26:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
        if rmessage1 == 25:
            basic.show_leds("""
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                """)
        if rmessage1 == 24:
            basic.show_leds("""
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                """)
        if rmessage1 == 23:
            basic.show_string("How are you")
        if rmessage1 == 22:
            basic.show_leds("""
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                """)
        if rmessage1 == 21:
            basic.show_leds("""
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                """)
    if appno == 30:
        if rmessage2 == 31:
            basic.show_string("Cool")
        if rmessage2 == 30:
            basic.show_string("Wow")
        if rmessage2 == 29:
            basic.show_string("Hi")
        if rmessage2 == 28:
            basic.show_string("Hello")
        if rmessage2 == 27:
            basic.show_string("Zzz")
        if rmessage2 == 26:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
        if rmessage2 == 25:
            basic.show_leds("""
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                """)
        if rmessage2 == 24:
            basic.show_leds("""
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                """)
        if rmessage2 == 23:
            basic.show_string("How are you")
        if rmessage2 == 22:
            basic.show_leds("""
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                """)
        if rmessage2 == 21:
            basic.show_leds("""
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                """)
    if appno == 30:
        if rmessage3 == 31:
            basic.show_string("Cool")
        if rmessage3 == 30:
            basic.show_string("Wow")
        if rmessage3 == 29:
            basic.show_string("Hi")
        if rmessage3 == 28:
            basic.show_string("Hello")
        if rmessage3 == 27:
            basic.show_string("Zzz")
        if rmessage3 == 26:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
        if rmessage3 == 25:
            basic.show_leds("""
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                """)
        if rmessage3 == 24:
            basic.show_leds("""
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                """)
        if rmessage3 == 23:
            basic.show_string("How are you")
        if rmessage3 == 22:
            basic.show_leds("""
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                """)
        if rmessage3 == 21:
            basic.show_leds("""
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

compplayedrps = 0
_7sscore = 0
_7stime = 0
userplayedrps = 0
elapsed = 0
messageid = 0
messagesymbol = 0
_7sstart = 0
rps = 0
timerstart = 0
rmessage6 = 0
rmessage5 = 0
rmessage4 = 0
mincalibtimer = 0
appno = 0
stepcounter = 0
runningDistance = 0
walkingDistance = 0
appID = 0
rmessage3 = 0
rmessage2 = 0
rmessage1 = 0
minutecalib = 0
hourcalib = 0
stopwatchmin = 0
time = ""
walkingDistanceMiles = 0
runningDistanceMiles = 0
hourcalibtimer = 0
dotscore = 0
sprite = 0
basic.show_string("ChampCo SmartWatch Beta.", 75)
input.calibrate_compass()
radio.set_group(109)
basic.show_string("What is the time?", 75)
hourcalib = 0
minutecalib = 0
rmessage1 = 0
rmessage2 = 0
rmessage3 = 0
appID = -100
walkingDistance = 0
runningDistance = 0
degrees = input.compass_heading()
stepcounter = 0
appno = 0
time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))
mincalibtimer = 0

def on_forever():
    global stepcounter, walkingDistance, runningDistance
    if input.acceleration(Dimension.STRENGTH) >= 1500 and input.acceleration(Dimension.STRENGTH) < 2000:
        stepcounter += 1
        walkingDistance += 0.0006
    if input.acceleration(Dimension.STRENGTH) >= 2000:
        stepcounter += 1
        runningDistance += 0.0007
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    global minutecalib, hourcalib
    basic.pause(60000)
    minutecalib += 1
    if minutecalib == 60:
        hourcalib += 1
        minutecalib = 0
    if hourcalib == 24:
        hourcalib += 0
basic.forever(on_forever3)

def on_forever4():
    if appID == 50:
        basic.show_string(time, 80)
basic.forever(on_forever4)

def on_forever5():
    pass
basic.forever(on_forever5)

def on_forever6():
    if appno == 4:
        if degrees > 0:
            basic.show_string("" + str(degrees) + ":" + "N", 80)
        elif degrees > 22:
            basic.show_string("" + str(degrees) + ":" + "NE", 80)
        elif degrees > 67:
            basic.show_string("" + str(degrees) + ":" + "E", 80)
        elif degrees > 112:
            basic.show_string("" + str(degrees) + ":" + "SE", 80)
        elif degrees > 157:
            basic.show_string("" + str(degrees) + ":" + "S", 80)
        elif degrees > 202:
            basic.show_string("" + str(degrees) + ":" + "SW", 80)
        elif degrees > 247:
            basic.show_string("" + str(degrees) + ":" + "W", 80)
        elif degrees > 292:
            basic.show_string("" + str(degrees) + ":" + "NW", 80)
        else:
            basic.show_string("" + str(degrees) + ":" + "N", 80)
basic.forever(on_forever6)

def on_forever7():
    global stopwatchmin
    if stopwatchmin != 0 and stopwatchmin != 1:
        basic.pause(60000)
        stopwatchmin += -1
    if stopwatchmin = 1:
        basic.pause(60000)
        stopwatchmin += -1
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
basic.forever(on_forever7)

def on_forever8():
    global time
    if minutecalib < 10 and not (hourcalib < 10):
        time = "" + str(hourcalib) + ":" + ("0" + ("" + str(minutecalib)))
    if minutecalib >= 10 and not (hourcalib < 10):
        time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))
    if minutecalib < 10 and not (hourcalib >= 10):
        time = "0" + ("" + str(hourcalib)) + ":" + ("0" + ("" + str(minutecalib)))
    if minutecalib >= 10 and not (hourcalib >= 10):
        time = "0" + ("" + str(hourcalib)) + ":" + ("" + str(minutecalib))
basic.forever(on_forever8)

def on_forever9():
    global compplayedrps
    if appno == 40:
        compplayedrps = randint(1, 3)
    if compplayedrps == userplayedrps and rps:
        basic.show_string("Draw")
    if compplayedrps == 1 and userplayedrps == 2 or (compplayedrps == 2 and userplayedrps == 3 or compplayedrps == 3 and userplayedrps == 1):
        basic.show_string("Win")
    if compplayedrps == 2 and userplayedrps == 1 or (compplayedrps == 3 and userplayedrps == 2 or compplayedrps == 1 and userplayedrps == 3):
        basic.show_string("Lose")
basic.forever(on_forever9)

def on_forever10():
    global stopwatchmin
    if input.is_gesture(Gesture.SHAKE):
        if appno == 12:
            if stopwatchmin == 0:
                stopwatchmin = mincalibtimer
            basic.show_number(stopwatchmin)
basic.forever(on_forever10)
