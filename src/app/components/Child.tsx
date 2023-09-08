type Props = {
  onIncrement: () => void;
};

const Child = ({ onIncrement }: Props) => {
  console.log("Child component rendered");

  return <button onClick={onIncrement}>Increment</button>;
};

export default Child;
