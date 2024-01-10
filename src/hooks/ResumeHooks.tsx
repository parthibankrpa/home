import { useContext } from "react";
import { ResumeDataContext } from "../context/ResumeContext";

function useResumeContext() {
  return useContext(ResumeDataContext);
}

export default useResumeContext;
