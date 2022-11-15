export type ResponsePropTypes = {
	status: number,
	data: any,
	statusText?: string,
	message?: string,
};

export type ResponseErrorPropTypes = {
	errorField?: string,
	errorMessage: string,
	field?: string,
	objectName?: string,
};
