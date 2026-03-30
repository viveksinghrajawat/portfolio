import { InlineWidget } from "react-calendly";
import { Badge } from "../components/ui/badge";

export function ScheduleCall() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6" variant="secondary">
            Free 30-Minute Consultation
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Schedule a Call
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Select a convenient time below to discuss your project and see how I can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Calendly Inline Widget */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2">
          <InlineWidget
            url="https://calendly.com/vr3750/30min"
            styles={{ height: "700px", width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>
    </div>
  );
}
