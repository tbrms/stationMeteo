export class BulletinMeteo {
    id: string;
    date: string;
    temperature: number;
    pression: number;
    humidite: number;

    constructor(
        idParam: string,
        dateParam: string,
        temperatureParam: number,
        pressionParam: number,
        humiditeParam: number
    ) {
        this.id = idParam;
        this.date = dateParam;
        this.temperature = temperatureParam;
        this.pression = pressionParam;
        this.humidite = humiditeParam;
    }

    fullName(): string {
        return this.temperature + ' ' + this.pression + ' ' + this.humidite;
    }
}