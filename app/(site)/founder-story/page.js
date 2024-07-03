import { FounderSlider } from "@/Components/Founder-story/FounderSlider";
import '../../../Components/Founder-story/FounderStory.css'

 const founder = () => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto ">
            <div className="  mt-[120px] ">
                {/* ------------ gradient div------- */}
                 
                <FounderSlider/>
            </div>
      </div>
    
    
    </>
  )
}

export default founder;
