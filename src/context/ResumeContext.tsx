import React, { createContext } from "react";
import data from "../data/resume.json";

import { ResumeInterface } from "../types/types";

type ReactChild = {
  children: React.JSX.Element;
};

const ResumeDataContext = createContext<ResumeInterface>({ ...data });

function ResumeDataProvider({ children }: ReactChild) {
  return (
    <ResumeDataContext.Provider value={{ ...data }}>
      {children}
    </ResumeDataContext.Provider>
  );
}
export { ResumeDataProvider, ResumeDataContext };
