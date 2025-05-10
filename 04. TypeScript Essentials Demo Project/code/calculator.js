// data:
//  - initial amount
//  - annual contribution
//  - expected return
//  - duration
function calculateInvestment(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    // INPUTS CHECK
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero.";
    }
    if (duration <= 0) {
        return "Duration must be at least one year.";
    }
    if (expectedReturn < 0) {
        return "Expected return amount must be at least zero.";
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totalAmount: total,
            totalContributions: totalContributions,
            totalInterestEarned: totalInterestEarned
        });
    }
    return annualResults;
} // => result[]
function printResults(results) {
    // print (output) the result data
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var yearEndResult = results_1[_i];
        console.log(yearEndResult.year);
        console.log("Total: ".concat(yearEndResult.totalAmount.toFixed(0)));
        console.log("Total Contributions: ".concat(yearEndResult.totalContributions.toFixed(0)));
        console.log("Total Interest Earned: ".concat(yearEndResult.totalInterestEarned.toFixed(0)));
        console.log('---------------------------');
    }
}
var investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
var results = calculateInvestment(investmentData);
printResults(results);
