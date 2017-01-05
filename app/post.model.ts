export class Post{
    constructor(
        public id:number,
        public header:string,
        public description:string,
        public content:string,
        public ownerId:number,
        public imageUrl:string,
        public category:string
    ){}
}