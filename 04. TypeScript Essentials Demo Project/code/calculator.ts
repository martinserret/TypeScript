// data:
//  - initial amount
//  - annual contribution
//  - expected return
//  - duration

type InvestmentData = {
  initialAmount: number,
  annualContribution: number,
  expectedReturn: number,
  duration: number 
}

function calculateInvestment(data: InvestmentData): number[] { // => result[]

}

function printResults(results): void {
  // print (output) the result data
}

const results = calculateInvestment(data);

printResults(results);