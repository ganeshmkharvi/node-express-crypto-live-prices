import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  transactionDate: { type: Date },
  currencyFrom: { type: String },
  amount1: { type: Number },
  currency2: { type: String },
  amount2: { type: Number },
  conversionType: { type: String }
});

detailSchema.method("toJSON", function () {
    // eslint-disable-next-line
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const detail = mongoose.model("Detail", detailSchema);
export = detail; 
