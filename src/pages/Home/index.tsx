import { HomeContainer, CoffeeContainer } from "./style";

import { Introduction, Card } from "../../components";
import { coffee } from "../../utils";

export function Home() {
  return (
    <HomeContainer>
      <Introduction />

      <section>
        <h2>Nossos cafés</h2>

        <CoffeeContainer>
          {coffee.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              label={item.label}
              value={item.value}
            />
          ))}
        </CoffeeContainer>
      </section>
    </HomeContainer>
  );
}
