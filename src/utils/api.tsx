type data = {
    ip: string,
    region: string,
    city: string,
    lat: number,
    lng: number,
    timezone: string,
    isp: string
}



async function getGeoData(value: string) {
    const apikey = import.meta.env.VITE_API_KEY;
    const api = `https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}&ipAddress=${value}`
    const apidomain = `https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}&domain=${value}`
    const domainRegex = /^(?!:\/\/)(?:(?:[A-Za-z0-9][A-Za-z0-9\-]{0,61}[A-Za-z0-9]\.)+(?:[A-Za-z]{2,}|xn--[A-Za-z0-9]+))$/;
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const isValidDomain = domainRegex.test(value);
    const isValidIP = ipRegex.test(value);

    if (isValidDomain) {
        const response = await fetch(apidomain, { mode: 'cors', method: 'GET' });
        const data = await response.json();

        const rawdata: data = {
            ip: data.ip,
            region: data.location.region,
            city: data.location.city,
            lat: data.location.lat,
            lng: data.location.lng,
            timezone: data.location.timezone,
            isp: data.isp
        }

        return rawdata
    } else if (isValidIP) {
        const response = await fetch(api, { mode: 'cors', method: 'GET' });
        const data = await response.json();

        const rawdata: data = {
            ip: data.ip,
            region: data.location.region,
            city: data.location.city,
            lat: data.location.lat,
            lng: data.location.lng,
            timezone: data.location.timezone,
            isp: data.isp
        }

        return rawdata
    } else {
        return false
    }
}

export { getGeoData };
