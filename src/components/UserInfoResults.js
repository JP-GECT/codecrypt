import Card from "./Card";

const UserInfoResults = ({ result, setResult }) => {
  return (
    <>
      <div>UserInfoResults</div>
      {result && (
        <div>
          <div>Name {result.Name}</div>
          <div> Age {result.Age}</div>
          <div> Family {result.Family}</div>
          <div> Location {result.Location}</div>
          <div> Investment Type {result["Investment Type"]}</div>
          <div> Debt Amount {result.Debt.Amount}</div>
          <div> Debt Rate {result.Debt["Interest Rate"]}</div>
        </div>
      )}

      <button
        className="w-full border-solid"
        onClick={() => {
          setResult(null);
        }}
      >
        Go back to form
      </button>
      <Card />
    </>
  );
};
export default UserInfoResults;
