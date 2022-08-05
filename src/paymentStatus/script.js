const s = require('fs')
const groups = require("./groups")
const paymentStatus = require("./status.json")
let status = {}
groups.forEach((obj) => { status[obj.group] = {} })

for (let i = 0; i < paymentStatus.resultCodes.length; i++) {
    let element = groups.find((item) => item.reg.test(paymentStatus.resultCodes[i].code))
    if (element)
        status[element.group][paymentStatus.resultCodes[i].code] = { ...paymentStatus.resultCodes[i], status: element.status }
}
groups.forEach((ele) => {
    s.writeFile(`paymentStatus.ts`, JSON.stringify(status), (e) => {
    })
})

