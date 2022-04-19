import { saveDetails } from "../service/detail";

export async function detail (req, res) {
    return await saveDetails(req,res);
  }
