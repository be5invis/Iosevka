export type SyntaxHighlightTokenProps = { children: React.ReactNode };

export const Keyword = (props: SyntaxHighlightTokenProps) => (
	<span className="token keyword">{props.children}</span>
);
export const Operator = (props: SyntaxHighlightTokenProps) => (
	<span className="token operator">{props.children}</span>
);
export const Quote = (props: SyntaxHighlightTokenProps) => (
	<span className="token quote">{props.children}</span>
);
