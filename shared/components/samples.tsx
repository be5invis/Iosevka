import { Keyword, Operator } from "./syntax";

export const OneLinerSample = () => (
	<>
		<Keyword>float</Keyword>
		{` Fox.quick(h){ is_brown `}
		<Operator>{"&&"}</Operator>
		{` it_jumps_over(doges.lazy) }`}
	</>
);
