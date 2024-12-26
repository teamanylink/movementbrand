import Navigation from "@/components/Navigation";
import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import { RefreshCw, FileText, ThumbsUp } from "lucide-react";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative">
          <div className="absolute -left-20 top-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -right-20 top-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10 flex flex-col gap-2">
            <div>
              A <span className="inline-block relative">
                <span className="relative">
                  <span className="absolute top-2 left-0 line-through decoration-secondary decoration-4">marketing</span>
                  <span className="invisible">marketing</span>
                </span>
                <span className="font-['Caveat'] text-primary absolute -top-12 left-0">movement</span>
              </span> agency
            </div>
            <div>on a mission</div>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A single content subscription to move your movement forward.
            <br />
            Pause or cancel anytime.
          </p>
          <Button size="lg" className="text-lg px-8">
            See plans
          </Button>
          <div className="mt-4 text-sm text-gray-500">Available now</div>
        </div>
      </section>

      <MacbookScrollDemo />

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <Feature
              icon={<RefreshCw className="w-8 h-8 text-primary" />}
              title="Subscribe & Request"
              description="Subscribe to a plan & request as many designs as you'd like."
            />
            <Feature
              icon={<FileText className="w-8 h-8 text-secondary" />}
              title="Quick Delivery"
              description="Receive your design within two business days on average."
            />
            <Feature
              icon={<ThumbsUp className="w-8 h-8 text-accent" />}
              title="100% Satisfaction"
              description="We'll revise the designs until you're 100% satisfied."
            />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">We're talking 'Product of the Year' good.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">#1 Design Agency 2024</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">Best Creative Solutions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold">Top Rated Service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;