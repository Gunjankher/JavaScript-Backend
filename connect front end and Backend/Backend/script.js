import express from 'express'

const app = express()


app.get('/',(req,res)=>{
res.send('server is ready')
})


app.get('/jokes', (req,res)=>{

    const jokes  =[

{
    id: 1,
    title : 'joke 1',
    content : 'this is joke 1'
},
{
    id: 1,
    title : 'joke 1',
    content : 'this is joke 1'
},
{
    id: 1,
    title : 'joke 1',
    content : 'this is joke 1'
},
{
    id: 1,
    title : 'joke 1',
    content : 'this is joke 1'
},
{
    id: 1,
    title : 'joke 1',
    content : 'this is joke 1'
},
{
    id: 1,
    title : 'joke 1',
    content : 'this is joke 1'
}

    ]
    res.send(jokes)
})



const port  = process.env.PORT  || 4000



app.listen (port ,()=>{
console.log(`serve at the http://localhost:${port}`);

})