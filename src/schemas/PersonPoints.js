export default class PersonPoints {
  static schema = {
    name: 'PersonPoints',
    properties: {
      person: 'Person',
      pointParameter: 'Point',
      value: 'double',
      date: 'Date'
    }
  };
}
