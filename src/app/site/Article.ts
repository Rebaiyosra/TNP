export class Article{
    constructor(private _nom: string,private _id: number,private _image: string,private _prix: number,private _dispo: boolean){}
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get id(): number {
    return this._id;
    }
    public set id(value: number) {
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
   
    
}