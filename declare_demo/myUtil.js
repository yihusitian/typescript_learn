function formatDate(date) {
    return date.toLocaleDateString().split('T')[0]
}

function formatMonet(amount) {
    return `¥${amount.toFixed(2)}`
}

module.exports = {
    formatDate,
    formatMonet
}