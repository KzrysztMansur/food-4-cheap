function FormInput({ label, id, placeholder, type, required }) {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          type={type || 'text'} // Default to 'text' if no 'type' is passed
          className="form-control"
          id={id}
          placeholder={placeholder}
          required={required || false} // Default to false if not provided
        />
      </div>
    );
  }
  
  export default FormInput;
  