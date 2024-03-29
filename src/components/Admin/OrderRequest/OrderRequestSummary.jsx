import React from "react";
import PrimaryBtn from "src/components/common/PrimaryBtn";
import PrimaryInput from "src/components/common/PrimaryInput";
import SecondaryBtn from "src/components/common/SecondaryBtn";
import SmallTitle from "src/components/common/SmallTitle";

function OrderRequestSummary({
  setActiveTab,
  newOrderRequest,
  setNewOrderRequest,
}) {
  return (
    <div>
      <SmallTitle>Price Summary</SmallTitle>
      <div className="flex flex-col gap-3 mt-5">
        <div className="grid grid-cols-2080">
          <div>Price</div>
          <PrimaryInput
            onChange={(e) => {
              setNewOrderRequest({
                ...newOrderRequest,
                price: e.target.value,
              });
            }}
            className="max-w-[700px]"
            value={newOrderRequest?.price || ""}
          />
        </div>
        <div className="grid grid-cols-2080">
          <div>Total Hour</div>
          <PrimaryInput
            onChange={(e) => {
              setNewOrderRequest({
                ...newOrderRequest,
                totalHour: e.target.value,
              });
            }}
            className="max-w-[700px]"
            value={newOrderRequest?.totalHour || ""}
          />
        </div>
        <div className="grid grid-cols-2080">
          <div>Total</div>
          <PrimaryInput
            onChange={(e) => {
              setNewOrderRequest({
                ...newOrderRequest,
                total: e.target.value,
              });
            }}
            className="max-w-[700px]"
            value={newOrderRequest?.total || ""}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-10">
        <SecondaryBtn
          onClick={() => {
            setActiveTab("info");
          }}
          className="max-w-[200px]"
        >
          Back
        </SecondaryBtn>
        <PrimaryBtn
          className="max-w-[200px]"
          onClick={() => {
            setActiveTab("description");
          }}
        >
          Continue
        </PrimaryBtn>
      </div>
    </div>
  );
}

export default OrderRequestSummary;
