// Component Imports
import BasicCalculated from "./BasicCalculated";
import BasicTable from "./BasicTable";

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
      <BasicCalculated
        loanDate={loanDate}
        loanAmount={loanAmount}
        annualInterestRate={annualInterestRate}
        termLength={termLength}
        monthlyRepaymentAmount={monthlyRepaymentAmount}
        totalInterestPaid={totalInterestPaid}
        totalAmountPaid={totalAmountPaid}
      />
      <BasicTable
        loanDate={loanDate}
        loanAmount={loanAmount}
        monthlyRepaymentAmount={monthlyRepaymentAmount}
        monthlyInterestRate={monthlyInterestRate}
      />
    </>
  );
};

export default ResultsSection;
