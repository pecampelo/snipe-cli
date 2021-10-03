export interface Command {
	name: string,
	alias?: string,
	readonly description: string,
	handler: (arg1?: any, arg2?: any) => any
}


