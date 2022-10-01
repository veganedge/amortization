// Component Imports
import BasicCalculated from "./BasicCalculated";
import BasicTable from "./BasicTable";

const ResultsSection = ({ loanAmount, annualInterestRate, termLength }) => {
  //   ISSUES FOR THIS COMPONENT
  // - just prop drilling these 3 arguments into child components

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
        loanAmount={loanAmount}
        annualInterestRate={annualInterestRate}
        termLength={termLength}
        monthlyRepaymentAmount={monthlyRepaymentAmount}
        totalInterestPaid={totalInterestPaid}
        totalAmountPaid={totalAmountPaid}
      />
      <BasicTable
        loanAmount={loanAmount}
        monthlyRepaymentAmount={monthlyRepaymentAmount}
        monthlyInterestRate={monthlyInterestRate}
      />
    </>
  );
};

export default ResultsSection;
