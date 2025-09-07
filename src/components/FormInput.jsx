// src/components/FormInput.jsx

function FormInput({ label, type, value, onChange, placeholder, required = false }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default FormInput