import getRealm from '../config/realm';

const personController = {
  savePerson: async person => {
    const realm = await getRealm();

    realm.write(() => {
      realm.create('Person', person, 'modified');
    });
    const data = realm.objects('Person');
    return data;
  },
  readPersons: async () => {
    const realm = await getRealm();
    const data = realm.objects('Person');
    console.log(data);
    return data;
  },
};

export default personController;
