import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let posts = [
        {id: 11, header: '11כותרת', description:'פוסט נחמד 11', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'projects' },
        {id: 12, header: 'כותרת12', description:'פוסט נחמד 12', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'projects' },
        {id: 13, header: '13כותרת', description:'פוסט נחמד 13', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'projects' },
        {id: 14, header: '14כותרת', description:'פוסט נחמד 14', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'tools' },
        {id: 15, header: '15כותרת', description:'פוסט נחמד 15', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'projects' },
        {id: 16, header: '16כותרת', description:'פוסט נחמד 16', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'tools' },
        {id: 17, header: '17כותרת', description:'פוסט נחמד 17', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'projects' },
        {id: 18, header: '18כותרת', description:'פוסט נחמד 18', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'tools' },
        {id: 19, header: '19כותרת', description:'פוסט נחמד 19', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'tools' },
        {id: 20, header: '20כותרת', description:'פוסט נחמד 20', content:'',ownerId:1, imageUrl:'images/1.jpg',categoty:'projects' }
    ];
    return {posts};
  }
}