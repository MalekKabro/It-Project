const axios = require('axios');
const input = require('readline-sync');

interface Type {
    value: string;
    displayValue: string;
    backendValue: string;
}
interface Rarity {
    value: string;
    displayValue: string;
    backendValue: string;
}
interface Introduction {
    chapter: string;
    season: string;
    text: string;
    backendValue: number;
}
interface Images {
    smallIcon: string;
    icon: string;
    featured?: any;
    other?: any;
}
interface Datum {
    id: string;
    name: string;
    description: string;
    type: Type;
    rarity: Rarity;
    series?: any;
    set?: any;
    introduction: Introduction;
    images: Images;
    variants?: any;
    searchTags?: any;
    gameplayTags: string[];
    metaTags?: any;
    showcaseVideo?: any;
    dynamicPakId?: any;
    displayAssetPath?: any;
    definitionPath: string;
    path: string;
    added: Date;
    shopHistory?: any;
}
interface RootObject {
    status: number;
    data: Datum[];
}


const apiCall = async () => {
    let response = await axios.get("https://fortnite-api.com/v2/cosmetics/br/search/all?type=outfit");
    let info: RootObject = response.data;
    return info

};


export { };




// function getRandomInt(max:number) {
//     return Math.floor(Math.random() * max);
//   }
