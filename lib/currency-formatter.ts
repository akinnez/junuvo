 export  const formattedAmount=(currencyCode:string,amount:string|number | bigint) => new Intl.NumberFormat(
    currencyCode == "NGN" ? "en-NG" : "en-US",
    {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
    }
  ).format(Number(amount));