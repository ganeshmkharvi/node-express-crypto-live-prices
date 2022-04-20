import { saveDetails, fetchAllRecords } from "../service/detail";

export async function detail (req, res) {
    return await saveDetails(req,res);
  }

export async function findAll (req, res) {
    return await fetchAllRecords(req,res);
  }

