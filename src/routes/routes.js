const express = require("express");
const router = express.Router();
const {
    translatePlate,
    translatePlateReverse,
    detectPlateType
} = require("../translate");



router.get("/", (req, res) => {
    return res.status(200).send("BRPlateConverter API is running.");
});

router.get("/convert/:plate", (req, res) => {
    const { plate } = req.params;
    try {
        const type = detectPlateType(plate);
        
        if (type.error) {
            return res.status(400).json({ error: "Invalid plate format" });
        }

        if (type === "old") {
            const translatedPlate = translatePlate(plate);
            if (translatedPlate.error) {
                return res.status(400).json(translatedPlate);
            } else {
                return res.status(200).json({
                    type: "old",
                    placaOriginal: plate.toUpperCase(),
                    placaMercosul: translatedPlate
                });
            }
        }
        else if (type === "mercosul") {
            const translatedPlate = translatePlateReverse(plate);

            if (translatedPlate.error) {
                return res.status(400).json(translatedPlate);
            } else {
                return res.status(200).json({
                    type: "mercosul",
                    placaMercosul: plate.toUpperCase(),
                    placaAntiga: translatedPlate
                });
            }
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server internal error." });
    }
});

router.use((req, res) => {
    return res.status(404).json({
        error: "Route not found."
    });
});

module.exports = router;