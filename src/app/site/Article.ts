export class Article{
    constructor(private _nom: string,private _id: string,private _image: string,
        private _prix: number,private _dispo: boolean, private _date: Date,private _qt: number,private _desc: string){}
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get id(): string {
    return this._id;
    }
    public set id(value: string) {
    this._id = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    } 
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get dispo(): boolean {
        return this._dispo;
    }
    public set dispo(value: boolean) {
        this._dispo = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    public get qt(): number {
        return this._qt;
    }
    public set qt(value: number) {
        this._qt = value;
    }
}