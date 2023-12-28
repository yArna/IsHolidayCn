import fs from "fs"

let DayMap: { [date: string]: [boolean, number] } = {}
let NameMap: { [name: string]: number } = {}

fs.readdirSync("./data").forEach((file: string) => {
    let json = fs.readFileSync(`./data/${file}`, "utf-8")
    let data = JSON.parse(json)

    data.days.forEach((day: any) => {
        let name = day.name
        let nameIndex = NameMap[name]
        if (nameIndex === undefined) {
            nameIndex = Object.keys(NameMap).length
            NameMap[name] = nameIndex
        }

        DayMap[day.date] = [day.isOffDay, nameIndex]
    })
})

let InvNameMap: { [nameIndex: string]: string } = {}
for (let name in NameMap) {
    InvNameMap[NameMap[name]] = name
}

fs.writeFileSync(
    "./holidayMap.ts",
    `export const DayMap = ${JSON.stringify(DayMap)} \n\n export const NameMap = ${JSON.stringify(InvNameMap)}`
)
