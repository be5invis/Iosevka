export function WordNumber(props: { n: number }) {
	let string = props.n.toString();
	const and = "and";

	string = string.replace(/[, ]/g, "");

	if (parseInt(string) === 0) return <>zero</>;

	const units = [
		"",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	];

	const tens = [
		"",
		"",
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety",
	];

	const scales = [
		"",
		"thousand",
		"million",
		"billion",
		"trillion",
		"quadrillion",
		"quintillion",
		"sextillion",
		"septillion",
		"octillion",
		"nonillion",
		"decillion",
		"undecillion",
		"duodecillion",
		"tredecillion",
		"quatttuor-decillion",
		"quindecillion",
		"sexdecillion",
		"septen-decillion",
		"octodecillion",
		"novemdecillion",
		"vigintillion",
		"centillion",
	];

	let start = string.length;
	let end: number;
	const chunks: string[] = [];
	while (start > 0) {
		end = start;
		chunks.push(string.slice((start = Math.max(0, start - 3)), end));
	}

	const chunksLen = chunks.length;
	if (chunksLen > scales.length) return <></>;

	const words: string[] = [];
	for (let i = 0; i < chunksLen; i++) {
		const chunk = parseInt(chunks[i]);

		if (chunk) {
			const digits = chunks[i].split("").reverse().map(parseFloat);

			if (digits[1] === 1) digits[0] += 10;

			let word: string;
			if ((word = scales[i])) words.push(word);
			if ((word = units[digits[0]])) words.push(word);
			if ((word = tens[digits[1]])) words.push(word);
			if (digits[0] || digits[1]) {
				if (digits[2] || (!i && chunksLen > 1)) words.push(and);
			}
			if ((word = units[digits[2]])) words.push(word + " hundred");
		}
	}

	return <>{words.reverse().join(" ")}</>;
}
