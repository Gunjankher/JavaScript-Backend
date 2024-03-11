import express from 'express'

const app = express()


app.get('/',(req,res)=>{
res.send('server is ready')
})


app.get('/api/jokes', async (req, res) => {
    try {
        const jokes = [{
                id: 1,
                title: 'joke 1',
                content: 'this is joke 1'
            },
            {
                id: 2,
                title: 'joke 2',
                content: 'this is joke 2'
            },
            {
                id: 3,
                title: 'joke 3',
                content: 'this is joke 3'
            },
            {
                id: 4,
                title: 'joke 4',
                content: 'this is joke 4'
            },
            {
                id: 5,
                title: 'joke 5',
                content: 'this is joke 5'
            },
            {
                id: 6,
                title: 'joke 6',
                content: 'this is joke 6'
            }
        ];
    
        res.send(jokes);
        console.log(typeof jokes);
    } catch (error) {
        console.error('Error fetching jokes:', error);
        res.status(500).send('Internal Server Error');
    }
    console.log(typeof jokes);
});



const port  = process.env.PORT  || 9000



app.listen (port ,()=>{
console.log(`serve at the http://localhost:${port}`);

})