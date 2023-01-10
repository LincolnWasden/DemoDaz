import express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser); //grabs the user
router.get("/dashboard", getDashboardStats); //grabs the stats to power the metrics/dashboard

export default router;
