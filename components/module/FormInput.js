
function FormInput({ name, label, value, onChange, type}) {
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <input type={type} value={value} onChange={onChange} id={name} name={name} />
    </div>
  )
}

export default FormInput