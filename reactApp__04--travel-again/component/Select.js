export default function Select({ className, value, onChange, children }) {
	return (
		<select
			value={value}
			className={className}
			onChange={onChange}>
			{children}
		</select>
	);
}
