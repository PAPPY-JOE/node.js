// // First scenario
// import { readFile } from 'fs'

// // async errors with callbacks:
// readFile(new URL('app.mjs', import.meta.url), 'utf-8', (err, data) => {
//     if (err) {
//         //  handle the error
//         // if i just want it to log:
//         // console.error(err)
//         // if I want it to crash the app, so it doesn't go on:
//         throw err
//     } else {
//         console.log(data)
//     }
// })

// // Second Senario
// import { readFile } from 'fs/promises'

// // async errors with promises:
// try {
//     const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (e) {
//     // // don't crash the app
//     // console.error(e)
//     // console.log("hello, code continued and error is logged")

//     // crash the app:
//     throw err
//     // nothing continues
// }

// Third scenario

import { readFile } from "fs/promises"

// helps me catch any error at all as I may not know to where to check:
process.on("uncaughtException", (e) => {
    console.log(e)
})

// error is 'app.mj' instead of 'app.mjs'
const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')

// doesn't get read due to error above
console.log("hello")

// Funny how errors are 'thrown' and meant to be 'caught', so an 'uncaught' error is bad and crashes my app
// But just incase nobody caught certain error(s), using the process.on("uncaughtException", (e) => { ... }) helps