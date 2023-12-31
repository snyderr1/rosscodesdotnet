type Env = {
	apiuser: string;
	apisecret: string;
};

type ProjectProps = {
	project_number: number;
	project_title: string;
	project_text: string;

};

export const onRequest: PagesFunction<Env> = async (context: any) => {
	const auth = btoa(`${context.env.apiuser}:${context.env.apisecret}`);
	const response = await fetch('https://rosscodesdb.rosscodesdatabase12345.cc/', {
		headers: {
			authorization: `Basic ${auth}`,
		},
		method: 'GET',
	});

	const data = await response.json();
	if (response.status === 200) {
		return new Response(JSON.stringify(data));
	}

	return new Response('it did not werk :((');
};

