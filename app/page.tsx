import { getItems } from "@/lib/api";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Policies from "@/components/Policies";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";

export default async function Home() {
  const [
    hero, services, about, features, policies,
    team, portfolio, gallery, testimonials, partners, blog,
  ] = await Promise.all([
    getItems("hero"),
    getItems("services"),
    getItems("about"),
    getItems("features"),
    getItems("policies"),
    getItems("team"),
    getItems("portfolio"),
    getItems("gallery"),
    getItems("testimonials"),
    getItems("partners"),
    getItems("blog"),
  ]);

  return (
    <main>
      <Hero items={hero} />
      <Services items={services} />
      <About items={about} />
      <Features items={features} />
      <Policies items={policies} />
      <Team items={team} />
      <Portfolio items={portfolio} />
      <Gallery items={gallery} />
      <Testimonials items={testimonials} />
      <Partners items={partners} />
      <Blog items={blog} />
      <ContactForm />
    </main>
  );
}
