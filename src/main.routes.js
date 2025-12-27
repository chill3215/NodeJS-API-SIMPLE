import express from "express";
import {StatusCodes} from "http-status-codes";

const router = express.Router();

//handler to http get by calling a callback method
router.get('/ping', (req, res) => {
    res.status(StatusCodes.CREATED);
    res.send('OK');
});

export default router;