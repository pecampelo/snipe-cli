export interface Command {
	name: string;
	alias?: string | undefined;
	readonly description: string;
	handler: (arg1?: any| Command, arg2?: any) => any;
}

