export default {
	async fetch(
		request: Request
	): Promise<Response> {
		const url = "https://api.openai.com" + new URL(request.url).pathname;
		const modifiedReq = new Request(url, request);
		return fetch(modifiedReq);
	},
};