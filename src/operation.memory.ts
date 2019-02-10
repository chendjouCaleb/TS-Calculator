export class OperationMemory{
    private memory: OperationResult[] = [];

    addOperation(expression: string, result: number){
        this.memory.push({ expression : expression, result : result})
    }

    
}

interface OperationResult {
    expression: string;
    result: number;
}