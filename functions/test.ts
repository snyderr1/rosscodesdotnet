type Env = {
	apiuser: string;

};

export const onRequest: PagesFunction<Env> = async (context: any) => {
	if (context.env.apiuser === 'dbaccess') {
		return new Response('This is a local environment!');
	}

	return new Response('This is a live environment');
};
