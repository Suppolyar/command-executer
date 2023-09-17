import inquirer from 'inquirer';
import type { PromptType } from "./prompt.types";
export class PromptService {
    public async input<T>(message: string, type: PromptType) {
        const { result } = await inquirer.prompt<{ result: T }>([
            {
                type: type,
                name: 'result',
                message
            }
        ])
        return result
    }
}
