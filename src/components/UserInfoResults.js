import Card from "./Card";
import DataChart from "./DataChart";
import WideCard from "./wideCard";

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

      <WideCard />
      <Card />
      <div className="w-1/2 bg-slate-100 drop-shadow-md rounded-xl">

      <DataChart />
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
