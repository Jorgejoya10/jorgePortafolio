import ISOIntro from "../../../components/ISO7498/ISOIntro";
import HeaderAndNotice from "../../../components/ISO7498/HeaderAndNotice";
import SecurityDefinition from "../../../components/ISO7498/SecurityDefinition";
import KeyQuestions from "../../../components/ISO7498/KeyQuestions";
import SystemDiagram from "../../../components/ISO7498/SystemDiagram";
import DeepQuestions from "../../../components/ISO7498/DeepQuestions"

const ISO7498 = () => {
  return (
    <section className="max-w-6xl mx-auto px-2">
      <HeaderAndNotice/>
      <ISOIntro/>
      <SecurityDefinition/>
      <KeyQuestions/>
      <SystemDiagram/>
      <DeepQuestions/>
    </section>
  );
};

export default ISO7498;
