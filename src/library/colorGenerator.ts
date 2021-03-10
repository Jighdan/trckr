const colors: Array<string> = [
	"#F94144",
	"#F3722C",
	"#F8961E",
	"#F9C74F",
	"#90BE6D",
	"#43AA8B",
	"#577590",
];

const getRandomColor = (): string => {
	const randomIndex: number = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
};

export { colors, getRandomColor }
