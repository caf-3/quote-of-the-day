#!/usr/bin/env node
const axios = require('axios');
const chalk = require('chalk');
const url = 'https://quotes.rest/qod';
axios({
    method: "get",
    url,
    headers: { 'Accept': "application/json" }
}).then(res =>{
    const quote = res.data.contents.quotes[0].quote;
    const author = res.data.contents.quotes[0].author;
    const log = chalk.green(`${quote} - ${author}`);
    console.log(log);
}).catch(err => {
    const log = chalk.red(err);
    console.log(log);
})