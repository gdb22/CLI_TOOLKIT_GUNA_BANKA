export interface Command {
  name: string;
  description: string;
  execute(args: string[]): Promise<void>;
}

export class CommandRegistry {
  private commands: Map<string, Command> = new Map();

  register(command: Command): void {
    this.commands.set(command.name, command);
  }

  async execute(name: string, args: string[]): Promise<void> {
    const command = this.commands.get(name);
    if (!command) {
      console.error(`❌ Command not found: ${name}`);
      this.listCommands();
      return;
    }

    try {
      await command.execute(args);
    } catch (error) {
      console.error(`❌ Command failed:`, error);
      process.exit(1);
    }
  }

  listCommands(): void {
    console.log('\n📚 Available Commands:');
    this.commands.forEach((command) => {
      console.log(`  ${command.name}: ${command.description}`);
    });
    console.log();
  }
}
