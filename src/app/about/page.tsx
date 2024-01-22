import { About } from "../components/About"
import { Medias } from "../components/Medias"


const page = () => {
    
  return (
    <div className=" mt-[12vh]">
      <About
        text="view resume"
        href="/Resume.pdf"
        medias={ <Medias />}
        styles=""
      />
    </div>
  )
}

export default page
  