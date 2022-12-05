import ButtonSubmit from "./ButtonSubmit";

function PopupWithForm ({ isOpen, onClose, name, children, buttonText, buttonName, buttonLabel,  onSubmit }) {

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget){
      onClose();
    }
  }

  return (
    <div
      onClick={handleClickClose}
      className={(isOpen ? `popup popup_${name}
        popup_opened` :
        `popup popup_${name}`)}>
          <div className="popup__container">
            <button
              type="button"
              tabIndex={0}
              className="popup__close-button"
              onClick={onClose}
              aria-label="Close popup"
            />
            <form
              id={`form_${name}`}
              className={`form form_${name}`}
              name={`form__${name}`}
              noValidate
              onSubmit={onSubmit}>
                <fieldset className="form__input-container">
                  {children}
                  <ButtonSubmit
                    name={buttonName}
                    label={buttonLabel}
                    text={buttonText}
                  />
                </fieldset>
              </form>
            </div>
        </div>
    )
}

export default PopupWithForm;