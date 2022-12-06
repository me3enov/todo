function ButtonSubmit({ name, label, text, disabled }) {
  return (
    <button
      className={`form__button form__button_${name}`}
      type="submit"
      aria-label={label}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default ButtonSubmit;
