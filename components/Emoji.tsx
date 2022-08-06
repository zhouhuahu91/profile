type Props = {
  className?: string;
  label?: string;
  symbol: string;
};

const Emoji = ({ className, label, symbol }: Props) => (
  <span
    className={className}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;
