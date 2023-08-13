// // console.log(__dirname, __filename)
// // console.log(process)


// // // modules have their own contexts and don't 'leak' out
// // const module = (function () {
// //     let me = "joseph"
// //     return { me }
// // }())

// export const action = () => {
//     console.log('hello')
// }

// // // to reuse action (common js)
// // module.exports = action

import { readFile, writeFile } from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
    title: 'Learn Node.js',
    body: "This is the final HTML"
}

for (const [k, v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}

await writeFile(new URL('index.html', import.meta.url), template)