# isHolidayCn

检查一天是否是中国节假日，包含调休，数据来源：https://github.com/NateScarlet/holiday-cn

```ts
import { isHolidayCn, getHolidayCn } from "is-holiday-cn"

isHolidayCn(new Date()) // false
getHolidayCn(new Date()) // { isHoliday: true, isWeekEnd: false, isTOIL: false, dayName: '劳动节' }
```

```ts
function isHolidayCn(date: Date): boolean
function getHolidayCn(date: Date): {
    // 是否节假日
    isHoliday: boolean
    // 是否是周末
    isWeekEnd: boolean
    // 是否是调休
    isTOIL: boolean
    // 如果是节假日，返回节假日名称
    dayName: string
}
```
