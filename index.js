/*
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
*/

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
const { translatePlate, translatePlateReverse } = require("./src/translate");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later."
});

app.use(limiter);

app.get("/", (req, res) => {
    try {
        res.status(200).send("BRPlateConverter API is running.");
    }
    catch (error) {
        res.status(500).send("Server internal error.");
    }
});

app.get("/translate/:plate", (req, res) => {
    const { plate } = req.params;
    try {
        const translatedPlate = translatePlate(plate);
        if (translatedPlate.error) {
            res.status(400).json(translatedPlate);
        } else {
            res.status(200).json({
                placaOriginal: plate.toUpperCase(),
                placaMercosul: translatedPlate
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server internal error." });
    }
});
app.get("/translate-reverse/:plate", (req, res) => {
    const { plate } = req.params;
    try {
        const translatedPlate = translatePlateReverse(plate);
        if (translatedPlate.error) {
            res.status(400).json(translatedPlate);
        } else {
            res.status(200).json({
                placaMercosul: plate.toUpperCase(),
                placaAntiga: translatedPlate
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Server internal error." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});