import Accordion from "@mui/material/Accordion";
import AccordionSummary from "./AccordionSummary";
import AccordionDetails from "./AccordionDetails";

const Accordion = (props) => {
  return (
    <div>
      {props.contents.map((el, idx) => (
        <Accordion key={`${props.type}-${idx}`}>
          <AccordionSummary summary={el.summary} />
          <AccordionDetails contents={el.contents} />
        </Accordion>
      ))}
    </div>
  );
};

export default Accordion;
