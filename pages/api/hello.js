// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {testData} from "../../data/testData";

export default function handler(req, res) {
  if(req.method === 'GET'){
    res.status(200).json(testData)
  } else if(req.method === 'POST'){
    const titleData = req.body.titleData;
    const newTitleData ={
      id:testData.length +1,
      text : titleData,
    }
    testData.push(newTitleData);
    res.status(201).json(newTitleData)

  }
}

