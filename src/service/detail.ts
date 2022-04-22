import Detail from "../model/detail";
import * as constants from "../utility/constants";
import { tradePairResponse } from "./interfaces";

export async function saveDetails(req, res) {
    try {
        const { transactionDate, currencyFrom, amount1, currency2, amount2, conversionType } = req.body;

        // Validate user input
        if (!(transactionDate && currencyFrom && amount1 && currency2 && amount2 && conversionType)) {
            res.status(constants.statusCode400).send({ message: constants.inValidInput });
        }

        const details = await Detail.create({
            transactionDate,
            currencyFrom,
            amount1,
            currency2,
            amount2,
            conversionType
        });
     
        return res.status(constants.statusCode201).send(details);
    } catch (err) {
        console.log(err);
        return res.status(constants.statusCode500).send(err);
    }
}

export async function insertMany(data: tradePairResponse[]) {
    await Detail.insertMany(converttoDetail(data));
}

const converttoDetail = (data: tradePairResponse[]) => {
    const details= [];
    data.forEach(element => {
    details.push({transactionDate:element.transactionDate ,
        currencyFrom: element.name,
        amount1: 1,
        currency2: element.target,
        amount2: element.price,
        conversionType: 'Live Price'})
});
return details;
}

export async function fetchAllRecords (req, res)  {
    await Detail.find({}).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(constants.statusCode500).send({
            message: err.message
        });
    });
}
