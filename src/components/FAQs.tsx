import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="pb-96 mt-28 max-w-5xl mx-auto px-5">
      <div className="bg-white/5 rounded-3xl backdrop-blur-sm p-10">
        <h2 className="md:text-4xl text-center text-3xl font-bold mb-10 font-secondaryUltraBold tracking-wide">
          <span className="text-yellow-500">FAQs</span>
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I get a Referal Code?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              dolores?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do I get rewarded in tokens or ETH when I refer buyers?
            </AccordionTrigger>
            <AccordionContent>
              You recieve your rewards in ETH instantly once someone you refer
              makes a transaction!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I get a Referal Code?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              voluptatibus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
