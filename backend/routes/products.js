const express=require("express")
const router=express.Router()
const Products=require("../models/productModels")

router.post('/', async(req, res) => {
    const postElem=req.body
    const newProducts=new Products(postElem)
    await newProducts.save()
    res.send(newProducts)
  })

  router.get('/', async(req, res) => {
    const getallproducts=await Products.find()
    res.send(getallproducts)
  })

router.get('/:id', async(req, res) => {
    const id=req.params.id
    const OneProducts=await Products.findById(id)
    res.send(OneProducts)
  })
  router.delete('/:id', async(req, res) => {
    const id=req.params.id
    const deleteProducts=await Products.findByIdAndDelete(id)
    res.send(deleteProducts)
  })



module.exports=router