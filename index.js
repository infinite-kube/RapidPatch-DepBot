const express = require('express'); 
const app = express();

app.get('/healthz', (_req, res) => res.status(200).send('ok'));  

const port = process.env.PORT || 3000; 
if (require.main === module) {   app.listen(port, () => console.log(`listening on ${port}`)); 
}  

module.exports = app;
