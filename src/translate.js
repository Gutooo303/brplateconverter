// Placa antiga para Mercosul
function OldPlateToMerc(plate) {
    try {
        if (!plate) {
            throw new Error("Plate not provided");
        }

        plate = plate.toUpperCase();

        const regex = /^[A-Z]{3}[0-9]{4}$/;

        if (!regex.test(plate)) {
            throw new Error("Invalid plate format");
        }

        const letters = plate.split("");

        const map = {
            "0": "A",
            "1": "B",
            "2": "C",
            "3": "D",
            "4": "E",
            "5": "F",
            "6": "G",
            "7": "H",
            "8": "I",
            "9": "J"
        };

        letters[4] = map[letters[4]];

        return letters.join("");

    } catch (error) {
        return {
            error: error.message
        };
    }
}

// Placa Mercosul para antiga
function MercToOldPlate(plate) {
    try {
        if (!plate) {
            throw new Error("Plate not provided");
        }

        plate = plate.toUpperCase();

        const regex = /^[A-Z]{3}[0-9][A-J][0-9]{2}$/;

        if (!regex.test(plate)) {
            throw new Error("Invalid Mercosul plate format");
        }

        const letters = plate.split("");

        const map = {
            "A": "0",
            "B": "1",
            "C": "2",
            "D": "3",
            "E": "4",
            "F": "5",
            "G": "6",
            "H": "7",
            "I": "8",
            "J": "9"
        };

        letters[4] = map[letters[4]];

        return letters.join("");

    } catch (error) {
        return {
            error: error.message
        };
    }
}
module.exports = {
    translatePlate: OldPlateToMerc,
    translatePlateReverse: MercToOldPlate
};