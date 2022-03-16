import { Aside } from "./aside";
import { MasterContainer } from "./container";
import { Main } from "./main";


export function Home(){
  return(
    <MasterContainer>
      <Aside/>
      <Main/>
    </MasterContainer>
  )
}