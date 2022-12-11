import React from "react";

type Number = {
  number: number;
};

export const Sample: React.FC<Number> = React.memo(({ number }) => {
  console.log("sample1がローディングされました。");

  return (
    <>
      <div>sample</div>
      <p>sample1のカウント:{number}</p>
    </>
  );
});
