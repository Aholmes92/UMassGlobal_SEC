const express = require('express');

const app = express();

function OccurrenceCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  };
  
function Mode(arr) {
    let frequencyCounter = OccurrenceCounter(arr);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in frequencyCounter) {
      if (frequencyCounter[key] > count) {
        mostFrequent = key;
        count = frequencyCounter[key];
      }
    }
  
    return +mostFrequent;
  };
  
function Mean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
  };
  
function Median(nums){
    nums.sort((a, b) => a - b);
  
    let middle = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
      median = (nums[middle] + nums[middle - 1]) / 2;
    } else {
      median = nums[middle];
    }
    return median
  };


app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        throw new Error('Numbers Only!')
      }
    if (nums instanceof Error) {
        throw new Error(nums.message);
      }
    
    let answer = {
        operation: "mean",
        result: Mean(nums)
      }
    
      return res.send(answer);
    });

app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});