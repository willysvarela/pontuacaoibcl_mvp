import Realm from 'realm';
import PersonSchema from '../schemas/PersonSchema';

const getRealm = () => {
  return Realm.open({
    schema: [PersonSchema],
  });
};

export default getRealm;
