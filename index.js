"use strict";

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

let key = "a2c2e8b557174ba6a6c9b6408ab07129";
let endpoint = "https://asepsis19textanalytics.cognitiveservices.azure.com/";

const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));
const sentimentInput = [
    "I had the best day of my life. I wish you were there with me."
];

async function sentimentAnalysis(client,sentimentInput){
    const sentimentResult = await client.analyzeSentiment(sentimentInput);
   return sentimentResult[0].sentiment =='positive';
}

sentimentAnalysis(textAnalyticsClient,sentimentInput).then(res=>
    console.log(res)
    );