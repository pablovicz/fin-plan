


export function getAllMonths(formatType: "short" | "long" | "both" = "short", locale: string = "pt-br") {
    
    if(formatType === "both") {
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