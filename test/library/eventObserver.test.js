import EventObserver from "../../src/library/eventObserver";
import stateSample from "../stateSample";

describe("EventObserver", () => {
	const instanceOfEventObserver = new EventObserver();
	const sampleCallback = (state) => state.expenses[0];

	test("Has an event object property", () => {
		expect(instanceOfEventObserver.hasOwnProperty("events")).toBe(true);
		expect(typeof instanceOfEventObserver.events).toBe("object");
	});

	test("Events can be subscribed", () => {
		instanceOfEventObserver.subscribe("validEvent", sampleCallback);

		expect(instanceOfEventObserver.events.hasOwnProperty("validEvent")).toBe(
			true
		);
		expect(instanceOfEventObserver.events["validEvent"].length).toBe(1);
		expect(instanceOfEventObserver.events["validEvent"][0]).toEqual(
			sampleCallback
		);
	});

	test("Notify valid Events", () => {
		const validNotification = instanceOfEventObserver.notify(
			"validEvent",
			stateSample
		);

		expect(validNotification[0]).toEqual(sampleCallback(stateSample));
	});

	test("Doesn't notify events when the event doesn't exists", () => {
		const fakeNotification = instanceOfEventObserver.notify(
			"fakeEvent",
			stateSample
		);

		expect(typeof fakeNotification).toBe("object");
		expect(fakeNotification.length).toEqual(0);
	});
});
