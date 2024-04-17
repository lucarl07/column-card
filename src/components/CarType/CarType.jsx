import React from 'react';
import './CarType.css'
import Button from '../Button/Button';

const CarType = ({icon, type, desc, color}) => {
  const [modal, setModal] = React.useState(false);

  return (
    <section className='carType' style={{backgroundColor: color}}>
      <div className='info'>
        <img src={icon} alt={`Icon for the ${type} category`} />
        <h1 className='title'>{type}</h1>
        <p className='desc'>{desc}</p>
      </div>
      <Button modal={modal} changeState={setModal} color={color} />
    </section>
  );
}
CarType.propTypes = {
  icon: String.isRequired,
  type: String.isRequired,
  desc: String.isRequired,
  color: String.isRequired
}

export default CarType;