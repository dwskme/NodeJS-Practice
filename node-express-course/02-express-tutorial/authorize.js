const authorize = (req,res,next)=>{
  const {user}= req.query;
  if(user=='jhon'){
    req.user = {name:'jhon', id:3}
    next()
  }else{
    res.status(401).send("unauthorized")
  }
  console.log('auth')
}
module.exports = authorize