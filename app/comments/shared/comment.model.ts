export class Comment{
    public postId:number;
    public id:number;
    public owner:string;
    public dateSubmitted:string;
    public content: string;
    public comments: Comment[];
    
    constructor(
        postId:number,
        id:number,
        owner:string,
        dateSubmitted:string,
        content: string,
        comments?: Comment[]){
            this.postId=postId; 
            this.id=id; 
            this.owner=owner; 
            this.dateSubmitted=dateSubmitted; 
            this.content=content; 
            if (comments){
                this.comments=comments; 
        }
    }
}