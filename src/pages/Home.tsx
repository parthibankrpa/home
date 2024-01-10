import Profileflash from "../components/Profileflash";
import { ResumeDataProvider } from "../context/ResumeContext";
function Home() {
  return (
    <div className="container">
      <ResumeDataProvider>
        <Profileflash />
      </ResumeDataProvider>
    </div>
  );
}

export default Home;
