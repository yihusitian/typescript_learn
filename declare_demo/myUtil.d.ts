declare function formatDate(date: Date): string;
declare function formatMonet(amount: number): string;

declare const myUtil: {
    formatDate: typeof formatDate;
    formatMonet: typeof formatMonet;
};

export = myUtil;
