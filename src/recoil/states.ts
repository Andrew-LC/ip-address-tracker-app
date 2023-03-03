import { atom } from 'recoil';

const mapState = atom({
  key: 'mapState',
  default: {
    city: "Walnut",
    ip: "76.76.21.241",
    isp: "Amazon.com, Inc.",
    lat: 34.02029,
    lng: -117.86534,
    region: "California",
    timezone: "-08:00"
  },
});


const positionState = atom({
  key: 'positionState',
  default: [34.02029, -117.86534],
});


export { mapState, positionState }
