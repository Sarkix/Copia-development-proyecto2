import React, { useEffect, useState } from "react";

function useCountAnimation(start, end, interval) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let timeout;
    if (count < end) {
      timeout = setTimeout(() => {
        const increment = Math.ceil(
          (end - start) / ((end - count) / (interval / 1))
        );
        setCount((prevCount) => Math.min(prevCount + increment, end));
      }, 1);
    }

    return () => clearTimeout(timeout);
  }, [count, end, interval, start]);

  return count.toLocaleString();
}

export default function ExchangeStats() {
  const circulatingCount = useCountAnimation(0, 219379705, 600000);
  const totalSupplyCount = useCountAnimation(0, 387985141, 6000000);
  const tokenBurnCount = useCountAnimation(0, 1018252950, 1000000);

  const list = [
    {
      h3: "Circulating Supply",
      id: "count-circulating",
      number: circulatingCount,
    },
    {
      h3: "Total Supply",
      id: "count-total-supply",
      number: totalSupplyCount,
    },
    {
      h3: "Market cap",
      id: "",
      number: "$540 million",
    },
    {
      h3: "Token Burn",
      id: "count-token-burn",
      number: tokenBurnCount,
    },
    {
      h3: "Current emissions",
      id: "",
      number: "1,36/block",
    },
  ];

  return (
    <div
      className="exchange-statistics-container light-theme theme-change"
      id="exchange-counter"
    >
      {list.map((item, index) => (
        <div
          className="exchange-info-container light-theme theme-change"
          key={index}
        >
          <div className="exsElementText">
            <h3 className="exchange-titles light-theme theme-change">
              {item.h3}
            </h3>
            <p
              className="exchange-counters light-theme theme-change"
              id={item.id}
            >
              {item.number}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

