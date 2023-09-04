interface IMaybe {
	test: boolean;
	truthy: JSX.Element | null;
	falsy: JSX.Element | null;
}

export const Maybe = ({ test, truthy, falsy }: IMaybe) => {
	return test ? truthy : falsy;
};
