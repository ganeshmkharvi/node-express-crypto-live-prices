import * as detail from "../controller/detail";
import express from "express";

export function userRoute(app) {
    const router = express.Router();
    router.post("/detail", detail.detail);
    router.get("/detail", detail.findAll);
    app.use('/api', router);
}
