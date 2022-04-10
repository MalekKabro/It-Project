import { clear } from "console";

const axios = require('axios');
const input = require('readline-sync');



async function main() {
    console.clear()
    let result = await axios.get("https://fortnite-api.com/v2/cosmetics/br",)
    let info : any= result.data;


    console.log(info);

};
main(); 


export {};