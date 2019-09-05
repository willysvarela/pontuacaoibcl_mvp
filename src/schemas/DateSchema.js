export default class DateSchema {
    static schema = {
        name: 'Date',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            date: 'date',
            description: 'string'
        }
    };
}