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
};

type InvestmentResultEntry = {
  year: string,
  totalAmount: number,
  totalContributions: number,
  totalInterestEarned: number
};

type CalculationResult = InvestmentResultEntry[] | string

function calculateInvestment(data: InvestmentData): CalculationResult { 

} // => result[]

function printResults(results: CalculationResult): void {
  // print (output) the result data
}

const results = calculateInvestment(data);

printResults(results);