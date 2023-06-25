import { Container } from "../layout/container";
import { Section } from "../layout/section";

export const Header = () => {
  return (
    <header>
      <Section className="bg-emerald-50">
        <Container className="py-5 flex justify-center md:justify-start align-middle">
          <h1 className="text-2xl md:text-4xl text-slate-800 font-bold">
            Wizcode Music App
          </h1>
        </Container>
      </Section>
    </header>
  );
};
