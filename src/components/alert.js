import createElement from '../utilities/createElement';
import * as rokkoSrc from '../assets/img/rokko-logo.png';
const loadAlert = (props) => {
	const {
		alertType,
		header,
		content,
		closeAble = true,
		haveSelection = false,
		acceptFunction,
		declineFunction,
	} = props;

	//#region create element

	const alertContainer = createElement({ classList: ['alert-container'] });
	const iconContainer = createElement({ classList: ['icon-container'] });
	const alertTextContainer = createElement({ classList: ['alert-text-container'] });
	const buttonContainer = createElement({ classList: ['button-container'] });

	const logo = createElement({ type: 'img', src: rokkoSrc.default });
	const headerElement = createElement({
		type: 'h5',
		innerText: header ? header : 'This is a Header, fyi',
	});
	const contentElement = createElement({
		type: 'p',
		innerText: content ? content : 'This is a content, fyi',
	});
	const closeButton = createElement({ type: 'button', innerText: 'x' });
	const acceptButton = createElement({ type: 'button', innerText: 'Accept' });
	const declineButton = createElement({ type: 'button', innerText: 'Decline' });

	//#endregion

	switch (alertType) {
		case 'success':
			alertContainer.classList.add('success');
			break;
		case 'warning':
			alertContainer.classList.add('warning');
			break;
		case 'error':
			alertContainer.classList.add('error');
			break;
		case 'info':
			alertContainer.classList.add('info');
			break;

		default:
			alertContainer.classList.add('warning');
			break;
	}

	closeAble ? '' : closeButton.classList.add('hide');
	haveSelection ? '' : acceptButton.classList.add('hide');
	haveSelection ? '' : declineButton.classList.add('hide');

    acceptButton.addEventListener('click', acceptFunction)
    declineButton.addEventListener('click', declineFunction)

	//#region append

	iconContainer.append(logo);
	alertTextContainer.append(headerElement, contentElement);
	buttonContainer.append(acceptButton, declineButton, closeButton);
	alertContainer.append(iconContainer, alertTextContainer, buttonContainer);

	//#endregion

	return alertContainer;
};

export default loadAlert;
