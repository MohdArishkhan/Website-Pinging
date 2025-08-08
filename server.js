import express from 'express';
import fs from 'fs';
import axios from 'axios';
import path from 'path';
const app = express();
const PORT = 3000;

let rawdata = fs.readFileSync('websites.json');
let websites = JSON.parse(rawdata);


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

async function pingwebsites() {
    const results = await Promise.all(websites.map(async (url) => {
        try {
            await axios.get(url, { timeout: 10000 });
            console.log(`${url} is up`);
        } catch (error) {
            console.log(`${url} is down`);
        }
    }));
}
setInterval(pingwebsites, 8 * 60 * 1000);

app.listen(PORT ,() =>{
    console.log("back from browser");
    pingwebsites();
});
