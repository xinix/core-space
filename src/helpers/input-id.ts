let nextId = 0

export function getInputId(): string {
    return `el-${nextId++}`
}
