


export function getAllMonths(formatType: "short" | "long" | "both" = "short", locale: string = "pt-br") {

    if (formatType === "both") {
        return Array.from({ length: 12 }, (e, i) => {
            const short = new Date(null, i + 1, null).toLocaleDateString(locale, { month: "short" });
            const long = new Date(null, i + 1, null).toLocaleDateString(locale, { month: "long" });

            return [long, short]
        })
    }


    return Array.from({ length: 12 }, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString(locale, { month: formatType });
    })
}


export function getMonthNumber(month: string = 'janeiro') {


    console.log(month)
    if (month.length >= 4) {
        return (getAllMonths("long").indexOf(month) + 1)
    }

    return (getAllMonths("short").indexOf(month) + 1)
}



export function dateToTable(date: Date) {
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(date).replace('.', '')
    const year = new Intl.DateTimeFormat('pt-BR', { year: '2-digit' }).format(date)
    return `${month}/${year}`
}