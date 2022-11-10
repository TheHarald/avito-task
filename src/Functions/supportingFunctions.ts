export function getTime(time: number | undefined): string {
    time = time || 0;
    const date = new Date(Number(time) * 1000);
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
}