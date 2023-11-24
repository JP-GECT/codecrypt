const AdvancedResults = ({ advancedResult, setAdvancedResult }) => {
  return (
    <>
      <div>AdvancedResults</div>
      <div>{advancedResult.risk}</div>
      <div>{advancedResult.options}</div>
      <div>{advancedResult.dependency}</div>
      <div>{advancedResult.annualIncome}</div>
      <div>{advancedResult.investmentDuration}</div>
      <div>{advancedResult.loseMoney}</div>
      <div>{advancedResult.riskOptions}</div>
      <div>{advancedResult.volatility}</div>

      {/* <button
        className="w-full border-solid"
        onClick={() => {
          setAdvancedResult(null);
        }}
      >
        Go back to form
      </button> */}
    </>
  );
};
export default AdvancedResults;
