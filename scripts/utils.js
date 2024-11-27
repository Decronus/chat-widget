export function getTime(timestamp) {
    const date = new Date(timestamp * 1000);
    console.log('data', date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}
