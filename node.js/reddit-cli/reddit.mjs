#! /usr/bin/env node

// dependencies
import fetch from "node-fetch"
import open from "open"
import yargs from "yargs"

// console.log(process.argv)
const { argv } = yargs(process.argv)

const res = await fetch("https://reddit.com/.json")
const data = await res.json()

const children = data.data.children
const randomPost = children[Math.floor(Math.random() * data.data.children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`

if (argv.print) {
    console.log(`
        title: ${randomPost.data.title},
        link: ${link},
    `)
} else {
    open(link)
}