

export type Category = {
    label: string;
    color: string;
    id: number;
}



export type Bill = {
    id: number; 
    name: string;
    value: number;
    date: Date;
    category: Category;
}