import { Component } from "../Component";
import { store } from "../../store/index";
import { InterfaceState } from "../../models/State";
import { InterfaceDefaultSettings } from "../../models/DefaultSettings";
import { SettingCurrency } from "./SettingCurrency";

class SettingsForm extends Component {
	hasRendered: boolean;
	settingsBoxElement: HTMLFieldSetElement;
	submitButton: HTMLButtonElement;

	constructor() {
		super(document.createElement("form"), store);
		this.hasRendered = false;
		this.settingsBoxElement = document.createElement("fieldset");
		this.settingsBoxElement.classList.add("settings-box");

		this.submitButton = document.createElement("button");
		this.submitButton.classList.add("button");
		this.submitButton.setAttribute("type", "submit");
		this.submitButton.innerText = "Submit Changes";

		this.element.classList.add("settings-form")
		this.element.append(this.settingsBoxElement, this.submitButton);
	}

	onSubmit(event: Event): void {
		event.preventDefault();
		const { elements } = this.element;

		const newDefaultCurrencyCode = elements.settingCurrency.value;
		const settings = {
			currencyCode: newDefaultCurrencyCode
		};

		store.commit("setDefaultCurrency", settings);
	}

	setSettingElements(state: InterfaceState): void {
		const settingCurrency = SettingCurrency(state.currencies);

		this.settingsBoxElement.innerHTML = "";
		this.settingsBoxElement.append(settingCurrency);
	}

	setEvents(): void {
		this.element.addEventListener("submit", (event: Event) => this.onSubmit(event));
	}

	render = (): HTMLElement => {
		this.setSettingElements(store.state);

		if (!this.hasRendered) {
			this.setEvents();
			this.hasRendered = true;
		}

		return this.element;
	}
}

export { SettingsForm }