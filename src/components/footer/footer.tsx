import { Container } from "../layout/container";
import { Section } from "../layout/section";

export const Footer = () => {
  return (
    <footer>
      <Section className="bg-slate-800">
        <Container className="py-10 flex justify-center md:justify-start align-middle">
          <p className="text-white">© 2023 by propbono</p>
        </Container>
      </Section>
    </footer>
  );
};
