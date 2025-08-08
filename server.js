import express from 'express';
import fs from 'fs';
import axios from 'axios';
const app = express();
const PORT = 3000;

let rawdata = fs.readFileSync('websites.json');
let websites = JSON.parse(rawdata);


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

async function pingwebsites() {
    for(const url of websites){
        try {
            const response = await axios.get(url , {timeout:40000});
            console.log(`${url} is up`);
        } catch (error) {
            console.log(`${url} is down`)
        }
    }
}


app.listen(PORT ,() =>{
    console.log("back from browser");
    pingwebsites();
});
