// Components and styling sheets:
import CarType from '../CarType/CarType';
import './Container.css'

// Images:
import IconLuxury from '../../assets/images/icon-luxury.svg';
import IconSedans from '../../assets/images/icon-sedans.svg';
import IconSUVs from '../../assets/images/icon-suvs.svg';

const Container = () => {
  const carDescList = [
    "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    "Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.",
    "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  ];

  // const carTypes = [
  //   {
  //     icon: IconSedans,
  //     description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  //     color: 'var(--bright-orange)'
  //   },
  //   {
  //     icon: 
  //   },
  //   {},
  // ]

  return (
    <main className='container'>
      <CarType icon={IconSedans} type='Sedans' desc={carDescList[0]} color='var(--bright-orange)'/>
      <CarType icon={IconSUVs} type='SUVs' desc={carDescList[1]} color='var(--dark-cyan)'/>
      <CarType icon={IconLuxury} type='Luxury' desc={carDescList[2]} color='var(--very-dark-cyan)'/>
    </main>
  );
}

export default Container;