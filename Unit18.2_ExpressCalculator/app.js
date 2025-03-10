const express = require("express");

const app = express();

// Function to parse and validate numbers from query
function parseNumbers(query) {
    if (!query || !query.numbers) {
        return { error: "Please provide 'numbers' in the format: ?numbers=1,2,3,4,5" };
    }

    const numbers = query.numbers.split(",").map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        return { error: "Please provide only numbers." };
    }

    return numbers;
}

// Function to calculate the mean
function calculateMean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Function to calculate the median
function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Function to calculate the mode
function calculateMode(numbers) {
    const freqMap = {};
    let maxFreq = 0;
    let modes = [];

    numbers.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
        }
    });

    for (const num in freqMap) {
        if (freqMap[num] === maxFreq) {
            modes.push(Number(num));
        }
    }

    return modes.length === Object.keys(freqMap).length ? "No mode" : modes;
}

// Routes for mean, median, and mode
app.get("/", (req, res) => {
    res.send("Use /mean, /median, or /mode and a 'numbers' query (e.g. ?numbers=1,2,3,4,5).");
});

app.get("/mean", (req, res) => {
    const numbers = parseNumbers(req.query);
    if (numbers.error) return res.status(400).json({ error: numbers.error });

    res.json({ 
        operation: "Mean",
        value: calculateMean(numbers) });
});

app.get("/median", (req, res) => {
    const numbers = parseNumbers(req.query);
    if (numbers.error) return res.status(400).json({ error: numbers.error });

    res.json({ 
        operation: "Median",
        value: calculateMedian(numbers) });
});

app.get("/mode", (req, res) => {
    const numbers = parseNumbers(req.query);
    if (numbers.error) return res.status(400).json({ error: numbers.error });

    res.json({ 
        operation: "Mode",
        value: calculateMode(numbers) });
});

// Start server
app.listen(3000, () => {
    console.log('Server running');
});