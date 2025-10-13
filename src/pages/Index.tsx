import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Results from "@/components/Results";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Results />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
