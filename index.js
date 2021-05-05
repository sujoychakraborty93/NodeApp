const {sums, multiplys} = require("./functions_to_test")

const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("first module")
})

app.get("/api/next/:num", (req, res) => {
  var nxt = sums(req.params.num, 1)
  var body = {}
  body[`next number of ${req.params.num} is`] = nxt
  console.log(body)
  res.json(body)
})

app.listen(4000, () => {
  console.log("listening to port 4000")
})