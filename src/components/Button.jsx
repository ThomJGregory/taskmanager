import PropTypes from 'prop-types'

export const Button = ({ color, text, onClick }) => {
	return (
		<button
			className="btn"
			style={{ backgroundColor: color }}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

// I know this is a silly, redundant way to change button color. Just refreshing myself with certain aspects of React.
Button.defaultProps = {
	color: 'green'
}

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func
}
export default Button
