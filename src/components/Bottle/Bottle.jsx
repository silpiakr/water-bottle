import PropTypes from 'prop-types'
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    console.log(bottle);
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle {name}</h3>
            <img src={img} alt="" height={'200px'} width={'200px'} />
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;