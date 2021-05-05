const {sums, multiplys} = require("./functions_to_test")

const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("first module, fixed defect in branch-2")
})

app.listen(4000, () => {
  console.log("listening to port 4000")
})