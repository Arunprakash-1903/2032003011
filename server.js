const express=require("express")
const cors=require('cors')
const app=express()
const axios=require("axios")

app.use(cors())
//app.use(express.json())
app.get('/', function (req, res) {
    res.send('Hello World!');
  });
   
app.get('/numbers',async (req, res) => {
    const url=req.query.url
    const l=[]
    var l2=[]
    function removewithfilter(arr) {
        let outputArray = arr.filter(function (v, i, self) {
     
            // It returns the index of the first
            // instance of each value
            return i == self.indexOf(v);
        });
     
        return outputArray;
    }
    
    
 
        
       
        url.map(async(u)=>{
            await axios.get(u).then(res=>{
                l.push(res.data.numbers);
               
             }).then(()=>{
                l2.push(removewithfilter(l.flat()));
            
             })
           
             
            
        })

   

   
    
    
    res.send(`<h1>${req.query.url}</h1>`);
  });

  app.listen(5555, function () {
    console.log('Example app listening on port 3000!');
  });