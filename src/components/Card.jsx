import PropTypes from 'prop-types';

export default function Card({ title, handleOnclick, activeData }) {
  const getLayerClassName = (layer) => {
    return activeData == layer ? "card active" : "card";
  }

  return (
    <div className={getLayerClassName(title)} onClick={() => handleOnclick(title)}>
        {title}
    </div>
  )
}

Card.propTypes = {
    title:PropTypes.string.isRequired,
    handleOnclick:PropTypes.func,
    activeData:PropTypes.string
}