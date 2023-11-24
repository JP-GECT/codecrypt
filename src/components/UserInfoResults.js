import Card from "./Card";
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

      <div className="flex flex-col gap-4 h-screen ">

      <WideCard />
      <Card />
      </div>
      
      <button
        className="w-full border-solid bg-slate-300 h-10 mt-10  "
        onClick={() => {
          setResult(null);
        }}
      >
        Go back to form
      </button>
    </>
  );
};
export default UserInfoResults;
