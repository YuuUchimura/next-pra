import { Button } from "@/components/ui/button";
type Props = {
  onIncrement: () => void;
};

const Child = ({ onIncrement }: Props) => {
  console.log("Child component rendered");

  return (
    <Button variant="outline" onClick={onIncrement}>
      Increment
    </Button>
  );
};

export default Child;
