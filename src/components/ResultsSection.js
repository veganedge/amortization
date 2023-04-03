// Component Imports
import LoanRepaymentCalculations from "./LoanRepaymentCalculations";
import LoanRepaymentDataDisplayed from "./LoanRepaymentDataDisplayed";

const ResultsSection = ({ loanDate, loanAmount, annualInterestRate, termLength }) => {

  // Making calculations based on user inputs:
  const termLengthInMonths = termLength * 12.0;
  const monthlyInterestRate = annualInterestRate / 100.0 / 12.0;
  const monthlyRepaymentAmount =
    (loanAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, termLengthInMonths))) /
    (Math.pow(1 + monthlyInterestRate, termLengthInMonths) - 1);
  const totalAmountPaid = termLengthInMonths * monthlyRepaymentAmount;
  const totalInterestPaid = totalAmountPaid - loanAmount;

  
  return (
    <>
      <LoanRepaymentCalculations
        loanDate={loanDate}
        loanAmount={loanAmount}
        annualInterestRate={annualInterestRate}
        termLength={termLength}
        monthlyRepaymentAmount={monthlyRepaymentAmount}
        totalInterestPaid={totalInterestPaid}
        totalAmountPaid={totalAmountPaid}
      />
      <LoanRepaymentDataDisplayed
        loanDate={loanDate}
        loanAmount={loanAmount}
        monthlyRepaymentAmount={monthlyRepaymentAmount}
        monthlyInterestRate={monthlyInterestRate}
      />
    </>
  );
};

export default ResultsSection;
