// HowItWorks.jsx
import WorkStep from "./WorkStep";
import { stepsData } from "./stepsData";

const HowItWorks = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stepsData.map((step) => (
          <WorkStep
            key={step.id}
            icon={step.icon}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;