import Card from "@/components/Card";

interface InterestRate {
  rate: string | number;
  noOfDays: string | number;
}

function InterestRateCard({
  data,
  className,
}: {
  data?: InterestRate;
  className?: string;
}) {
  return (
    <Card className={`space-y-3 !py-5 !shadow ${className}`}>
      <h4 className="text-sm font-bold">Interest rate</h4>
      <ul className="text-xs space-y-3 list-disc">
        <li>
          You will earn an interest rate of{" "}
          <span className="text-button font-bold">{data?.rate || 10}% p.a</span>
        </li>
        <li>
          Savings Duration is{" "}
          <span className="text-button font-bold">
            {data?.noOfDays || 20} days
          </span>
        </li>
      </ul>
    </Card>
  );
}
export default InterestRateCard;
