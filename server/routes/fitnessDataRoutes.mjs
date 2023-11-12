import express from "express";
import {inputFitnessData, inputMultipleRandom, inputRandomData} from "../controllers/fitnessDataControllers.mjs";

const router = express.Router();


router.post("/inputdata", inputFitnessData);
router.post("/inputrandomdata", inputRandomData);
router.post("/inputmultiplerandom", inputMultipleRandom);

let data = 80

router.get("/", (req, res) => {
  return res.json([{heartrate: 1 }, {heartrate: 2}])
})
export default router;