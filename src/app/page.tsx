import Image from "next/image";
import Button from "@/UI/Button"
import Input from "@/UI/Input"

export default function Home() {
  return (
    <main className="flex">
      <h1> Hello brazze! </h1>
        <div className="main-block">
          <Input></Input>
          <div></div>
          <Button text={"test text"} color={"red"}></Button>
          <Button text={"test 222s text"} color={"green"}></Button>
        </div>
    </main>
  );
}
