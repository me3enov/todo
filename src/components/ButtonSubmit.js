//Там, где используется кнопка, не передается проп disabled. Предположу, что ты сделал это на будущее.
//Но так не делается. Писать код в надежде или в планах использовать в будущем может обернуться тем, что он им не воспользуются вовсе.
//В данном случае не крит. Просто следи за такими вещами.
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
