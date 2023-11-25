import { PieChart } from "@mui/x-charts/PieChart";

const DataChart = ({expenseAllocation}) =>{

    const b = parseInt(expenseAllocation["Debt Repayment"]["Monthly Allocation"]);
    const c = parseInt(expenseAllocation["Emergency Fund"]["Monthly Allocation"]);
    const d = parseInt(
      expenseAllocation["Healthcare and Insurance"]["Monthly Allocation"]
    );
    const e = parseInt(
      expenseAllocation["Living Expenses"]["Monthly Allocation"]
    );
    const f = parseInt(
      expenseAllocation["Savings and Investments"]["Monthly Allocation"]
    );
    
    return(
        <div className=" flex justify-center">
            <PieChart 
              series={[
                {
                  data: [
                    { id: 0, label: "Emergency Fund", value: c },
                    { id: 1, label: "Healthcare and Insurance", value: d },
                    { id: 2, label: "Living Expenses", value: e },
                    { id: 3, label: "Debt Repayment", value: b },
                    // { id: 4, label: "Miscellaneous", value: a },
                    { id: 5, label: "Savings & investments", value: f },
                  ],
                },
              ]}
              width={800}
              height={350}
            />

        </div>
        

    )
}

export default DataChart