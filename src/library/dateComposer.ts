const composeDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => (
	new Date(date).toLocaleDateString(undefined, options ? options : {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric"
	})
);

const composeTime = (time: Date | string): string => (
	new Date(time).toLocaleTimeString(undefined, {
		hour12: false,
		hour: "numeric",
		minute: "numeric"
	})
);

export { composeDate, composeTime };