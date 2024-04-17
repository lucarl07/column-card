import './Button.css'

const Button = ({modal, changeState, color}) => {
  let btnBgColor = modal === false? 'white' : color;
  let btnTxtColor = modal === true? 'white' : color;

  return (
    <button className='btn' style={{
      backgroundColor: btnBgColor,
      color: btnTxtColor
    }} onMouseDown={() => changeState(true)} onMouseUp={() => changeState(false)} onMouseOut={() => changeState(false)}>
      Learn more
    </button>
  );
}
Button.propTypes = {
  modal: Boolean.isRequired,
  changeState: Function.isRequired,
  color: String.isRequired
}

export default Button;