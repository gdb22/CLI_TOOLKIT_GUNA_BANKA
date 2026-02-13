export interface ParsedArgs {
  params: string[];
  flags: Map<string, string>;
}

export const parseArgs = (args: string[]): ParsedArgs => {
  const params: string[] = [];
  const flags = new Map<string, string>();

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const flagName = args[i].substring(2);
      const flagValue = args[i + 1];

      if (flagValue && !flagValue.startsWith('--')) {
        flags.set(flagName, flagValue);
        i++;
      } else {
        flags.set(flagName, 'true');
      }
    } else {
      params.push(args[i]);
    }
  }

  return { params, flags };
};

export const getFlag = (flags: Map<string, string>, name: string, defaultValue?: string): string | undefined => {
  return flags.get(name) || defaultValue;
};
