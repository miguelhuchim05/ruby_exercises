const getWelcome = name => {
  return () => `Hi ${name}!`;
}
const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');

greetHomie();
greetFco();