import User from "../model/detail";
import * as constants from "../utility/constants";

export async function saveDetails(req, res) {
    try {
        const { transactionDate, currencyFrom, amount1, currency2, amount2, conversionType } = req.body;

        // Validate user input
        if (!(transactionDate && currencyFrom && amount1 && currency2 && amount2 && conversionType)) {
            res.status(constants.statusCode400).send({ message: constants.inValidInput });
        }

        const details = await User.create({
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
