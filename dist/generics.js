export { paginate };
function paginate(items, pageSize, pageNumber) {
    const start = (pageNumber - 1) * pageSize;
    return items.slice(start, start + pageSize);
}
