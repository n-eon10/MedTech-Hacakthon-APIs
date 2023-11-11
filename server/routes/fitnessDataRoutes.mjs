import express from "express";
import {inputFitnessData} from "../controllers/fitnessDataControllers.mjs";

const router = express.Router();

router.post("/inputdata", inputFitnessData);

export default router;