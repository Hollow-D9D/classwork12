export function isPrevsComplete(array, i) {
    const tmp = array.slice (0, i);
    return tmp.every(({isComplete}) => isComplete);
}