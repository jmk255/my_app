import { GreetingWithDefault, ParentComponent, ToggleComponent } from "../components/PropsExample"

function ExampleForm() {
  return (
    <>
      <GreetingWithDefault name="홍길동"/>
      <ParentComponent/>
      <ToggleComponent/>
    </>
  )
}

export default ExampleForm