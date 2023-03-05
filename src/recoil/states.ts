import { atom } from 'recoil';
import { dataProps } from '../interfaces';


const mapState = atom({
  key: 'mapState',
  default: {} as dataProps,
});


const positionState = atom({
  key: 'positionState',
  default: [] as number[],
});


export { mapState, positionState }
