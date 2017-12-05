interface BabyNameRecord {
    name: string;
    sex: string;
    count: number;
}
declare const BABYNAMES: Array<BabyNameRecord>;

interface NumeralFormatter {
    format: function(string): string;
}
declare function numeral(numberToFormat: any): NumeralFormatter;