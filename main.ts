let colume = 0
led.enable(false)
I2C_LCD1602.LcdInit(0)
let group = [["1", "2", "3", "A"], ["4", "5", "6", "B"], ["7", "8", "9", "C"], ["*", "0", "#", "D"]]
basic.forever(function () {
    for (let row = 0; row <= 3; row++) {
        if (row == 0) {
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P4, 0)
        } else if (row == 1) {
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P6, 1)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P4, 0)
        } else if (row == 2) {
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P4, 0)
        } else if (row == 3) {
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P6, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P4, 1)
        }
        if (pins.digitalReadPin(DigitalPin.P3) == 1) {
            colume = 0
            I2C_LCD1602.ShowString(group[row][colume], 0, 0)
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            colume = 1
            I2C_LCD1602.ShowString(group[row][colume], 0, 0)
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            colume = 2
            I2C_LCD1602.ShowString(group[row][colume], 0, 0)
        } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            colume = 3
            I2C_LCD1602.ShowString(group[row][colume], 0, 0)
        }
    }
})
