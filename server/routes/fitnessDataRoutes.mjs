import express from "express";
import {inputFitnessData, inputRandomData} from "../controllers/fitnessDataControllers.mjs";

const router = express.Router();

router.post("/inputdata", inputFitnessData);
router.post("/inputrandomdata", inputRandomData);

export default router;