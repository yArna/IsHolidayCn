import { DayMap, NameMap } from "./holidayMap"

export function isHolidayCn(date: Date) {
    return getHolidayCn(date).isHoliday
}

export function getHolidayCn(date: Date) {
    let YYYY = date.getFullYear()
    let MM = `${date.getMonth() + 1}`.padStart(2, "0")
    let DD = `${date.getDate()}`.padStart(2, "0")
    let dateText = `${YYYY}-${MM}-${DD}`

    let holidayInfo = (DayMap as any)[dateText]
    let isWeekEnd = date.getDay() === 0 || date.getDay() === 6
    let isHoliday = isWeekEnd
    let isTOIL = false // 调休
    let dayName = isWeekEnd ? "周末" : ""

    if (holidayInfo) {
        dayName = (NameMap as any)[holidayInfo[1]]
        if (holidayInfo[0] == false) {
            isTOIL = true
            isHoliday = false
            dayName = `调休（${dayName}）`
        }
    }

    return {
        isHoliday,
        isWeekEnd,
        isTOIL,
        dayName,
    }
}
