import React from "react";
import { History } from "../Data/data";

const BalanceHistory = () => {
  return (
    <div className="flex flex-col">
      <h1 className=" my-4 text-[20px] top-0">Recent History</h1>
      <ul>
        {History.map((transaction) => {
          return (
            <li key={transaction.id}>
              <hr className=" border-gray-500 w-full" />
              <div className="flex justify-between">
                <h1 className="font-semibold text-[15px] my-2">
                  {transaction.method} {transaction.type}
                </h1>
                <div className="text-right my-2">
                  <h1 className="font-thin text-gray-300">
                    {transaction.time}
                  </h1>
                  <h1 className="font-semibold text-[20px]">
                    <span
                      className={
                        transaction.type === "Deposit"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {transaction.type === "Deposit" ? "+" : "-"}
                    </span>
                    {transaction.amount}ETB
                  </h1>
                  <h1 className=" text-center rounded-[33px] font-bold text-sm ">
                    {transaction.status}
                  </h1>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BalanceHistory;
