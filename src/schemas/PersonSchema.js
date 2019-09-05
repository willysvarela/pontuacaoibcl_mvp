export default class PersonSchema {
  static schema = {
    name: 'Person',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
    },
  };
}
