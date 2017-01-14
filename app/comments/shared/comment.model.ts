export class Comment{
    public postId:number;
    public id:number;
    public owner:string;
    public dateSubmitted:string;
    public content: string;
    public parentId:number;
    public comments: Comment[];

    constructor(owner:string,content: string){
        this.owner=owner;
        this.content=content;
    }
}