import Card from "./Card";
import DataChart from "./DataChart";
import WideCard from "./wideCard";

// import schoolImg from "../../public/school.jpg";
import EmergencyFund from "../../public/Emergency-Fund.png";
import HealthCare from "../../public/Healthcare.png";
import LivingExpenses from "../../public/Living-Expenses.jpg";
import DebtRepayment from "../../public/Debt-Repayment.jpg";
import SavingsAndInvestment from "../../public/Savings-and-Investment.jpg";

const UserInfoResults = ({ result, setResult }) => {


  return (
    <>
      {/* {result && (
        <div>
          <div>Name {result.Name}</div>
          <div> Age {result.Age}</div>
          <div> Family {result.Family}</div>
          <div> Location {result.Location}</div>
          <div> Investment Type {result["Investment Type"]}</div>
          <div> Debt Amount {result.Debt.Amount}</div>
          <div> Debt Rate {result.Debt["Interest Rate"]}</div>
        </div>
      )} */}

      <div className="flex flex-col gap-4 h-screen items-center ">
        <WideCard location={result.Location}/>
        <div className="flex flex-wrap gap-5 justify-around">
          <Card
            title="Emergency Fund"
            img={EmergencyFund}
            description="Be cautious, be safe"
            amount={result["Expense Allocation"]["Emergency Fund"]["Monthly Allocation"]}
          />
          <Card
            title="Health Care and Insurance"
            img={HealthCare}
            description="Protect yourself and your beloved ones"
            amount={result["Expense Allocation"]["Healthcare and Insurance"]["Monthly Allocation"]}
          />
          <Card
            title="Living Expenses"
            img={LivingExpenses}
            description="Your basic necessities like food, water, electricity, transport etc."
            amount={result["Expense Allocation"]["Living Expenses"]["Monthly Allocation"]}
          />
          <Card
            title="Debt Repayment"
            img={DebtRepayment} 
            description="Repay debts systematically and be tension free"
            amount={result["Expense Allocation"]["Debt Repayment"]["Monthly Allocation"]}
          />
          {/* <Card
            title="Miscellaneous"
            img={Miscellaneous}
            description="this is the description of the expences for a specific type"
            amount={5000}
          /> */}
          <Card
            title="Savings And Investment"
            img={SavingsAndInvestment}
            description="The bonus in your hands. Save it or Invest it or do both"
            amount={result["Expense Allocation"]["Savings and Investments"]["Monthly Allocation"]}
          />
        </div>
        <div className="w-1/2 bg-slate-100 drop-shadow-md rounded-xl">
          <DataChart expenseAllocation = {result["Expense Allocation"]}/>
        </div>
        <button
          className="w-full border-solid bg-slate-300 h-10 mt-10  "
          onClick={() => {
            setResult(null);
          }}
        >
          Go back to form
        </button>
      </div>
    </>
  );
};
export default UserInfoResults;
