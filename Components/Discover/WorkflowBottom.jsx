import { BsPersonWorkspace } from "react-icons/bs";
const WorkflowBottom = () => {
  return (
    <div className="rounded-[80px] w-[90%] sm:w-[70%] bg-[#161616] h-[50px] md:h-[57px] lg:py-[12px]  py-2 md:py-3 px-6 sm:px-12 xl:px-10  flex justify-between items-center gap-2 mx-auto border border-[#414548]">
      <p className="text-white text-[10px] sm:text-[13px] text-center">
        Today worklife
      </p>
      <div className="bg-gray-300 p-2 md:p-3 rounded-full">
        {/* <img src={circleWhite} alt="" /> */}
        <BsPersonWorkspace className="text-xl" />
      </div>

      <p className="text-white text-[10px] sm:text-[13px] text-center">
        Mocdt worklife
      </p>
    </div>
  );
};

export default WorkflowBottom;
