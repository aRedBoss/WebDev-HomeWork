import PropTypes from 'prop-types'
import './IdCard.css'

function IdCard(props){
    return(
        <div className="IdCard">
            <img src={props.picture} alt="Person pic" />
            <div className="info">
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>height: {props.height}</p>
                <p className="birth">Birth: {props.birth.toDateString()}</p>
            </div>
        </div>
        
    );
}

IdCard.propTypes = {
    picture: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    birth: PropTypes.instanceOf(Date).isRequired, 
    }

export default IdCard;