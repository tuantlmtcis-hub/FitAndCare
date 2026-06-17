import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProgramCards from './components/ProgramCards';
import ProcessTimeline from './components/ProcessTimeline';
import WhyChooseFnC from './components/WhyChooseFnC';
import FounderSection from './components/FounderSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header isDark={isDark} onToggleTheme={toggle} />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProgramCards />
        <ProcessTimeline />
        <WhyChooseFnC />
        <FounderSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
