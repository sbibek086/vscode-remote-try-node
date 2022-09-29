/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';
//whatever I added was from https://codeforgeek.com/render-html-file-expressjs/
const express = require('express');
const path = require('path');  
const router = express.Router();   

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

router.get('/', function (req, res) {
  res.sendFile(path.join( __dirname + '/index.html'));
}); 

app.use('/',router); 

//below was original one
/*app.get('/', (req, res) => {
	res.render('index');
});*/

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);