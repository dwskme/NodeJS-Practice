const express = require("express")

const app = express()
const {people, products} = require("./data")

app.get('/', (req, res)=> {
res.send('<h1> home page</h1> <br> <a href="/api/products"> Products Link </a>  ')
})
app.get('/api/products', (req, res)=>{

  const newProducts = products.map((products)=>{
    const {id,name,image} = products;
    return {id,name,image}
  })
  res.send(newProducts)
})

app.listen(5000, (req,res)=>{
  console.log("Server is running    ")
})