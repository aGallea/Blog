import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let posts = [
        {
          id: 1, header: 'סיפור קצר', description:'על מה ולמה', 
          content:"<p>שלום לכולם, קוראים לי גד, נשוי + ארבעה ילדים ומהנדס תכנה במקצועי.</p>" +
                  "<p>לפני זמן מה עברנו לגור בבית במושב אי שם, בית שכור והחלטנו להתחיל למלא אותו קצת ברהיטים. בחרתי להתחיל בחיפוש אחר ספסל לכניסה של הבית, משהו לשים עליו תיקים ומתחתיו סלסלות לנעלים. התחלתי לשוטט באינטרנט וחשבתי אולי לנסות לבנות אחד בעצמי, אז קניתי עצים, לקחתי לאבא שלי את המסור," + "קניתי מברגה ומקדחה (תמיד טוב שיש בבית), קצת טיפים מאבא (שגם בנה כמה דברים לבד), קצת אינטרנט ובלי יותר מידי תכנון התחלתי לבנות.&nbsp;הרסתי את העצים, לא חתכתי נכון ומהספסל נשארה מסגרת עץ שהפכה למדף נחמד.</p>" +
                  "<p>אחרי שהרסתי הכל באו השאלות: למה לא עשית חור מוביל? מה זה הברגים האלו? מה עם דבק? וכו וכו.&nbsp;כמובן שכל התשובות שהיו לי הם: 'מה זה חור מוביל?', 'איזה דבק?' וכו וכו.</p>" +
                  "<p>אבל מה, התאהבתי בעבודה, התחלתי לחפש עוד חומר באינטרנט על כלים, שיטות עבודה, איך ומה... והחלטתי לעשות את זה קצת יותר ברצינות. קניתי כמה כלים בסיסיים, ברגים, דבק, חיפשתי תוכניות לשולחן עבודה, קניתי עצים ובניתי אחד. הצליח לי. מכאן כבר נהייתי נגר חובב (גם ספסל כניסה לבית בניתי) .</p>"+
                  "<p>לאורך הדרך היה חסר לי אנשים שיוכלו לתת טיפים, להכווין ושאוכל לשאול אותם שאלות שיחסכו לי הרבה טעויות (שגם עלו קצת כסף). אז החלטתי לפתוח בלוג בשביל לתת מהניסיון שיש לי לכאלה שמתחילים או רוצים להתחיל, לקבל טיפים ועזרה מאחרים וגם לתת ולקבל רעיונות לפרוייקטים חדשים.</p>"+
                  "<p>הבלוג הזה הוא בלוג של נגר חובב (חשוב לי לציין), אני לא משתמש בכלים כבדים (חוץ ממסור), אין לי שולחן נגרים (שולחן עבודה פשוט שאני בניתי), אני עובד בחצר של הבית, עד היום עבדתי רק עם אורן מוקצע (וכנראה זה גם ימשיך כך), הרבה פעמים אני מאלתר ואני עושה מלא (אבל מלא) טעויות .</p>"+
                  "<p>תודה שבחרתם לבקר כאן ואשמח לתגובות.</p>"+
                  "<p>גד</p><hr>",
          ownerId:1, imageUrl:'app/images/about-bg.jpg',categoty:'about' 
        },
        {id: 11, header: '11כותרת', description:'פוסט נחמד 11', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'projects' },
        {id: 12, header: 'כותרת12', description:'פוסט נחמד 12', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'projects' },
        {id: 13, header: '13כותרת', description:'פוסט נחמד 13', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'projects' },
        {id: 14, header: '14כותרת', description:'פוסט נחמד 14', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'tools' },
        {id: 15, header: '15כותרת', description:'פוסט נחמד 15', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'projects' },
        {id: 16, header: '16כותרת', description:'פוסט נחמד 16', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'tools' },
        {id: 17, header: '17כותרת', description:'פוסט נחמד 17', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'projects' },
        {id: 18, header: '18כותרת', description:'פוסט נחמד 18', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'tools' },
        {id: 19, header: '19כותרת', description:'פוסט נחמד 19', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'tools' },
        {id: 20, header: '20כותרת', description:'פוסט נחמד 20', content:'',ownerId:1, imageUrl:'app/images/1.jpg',categoty:'projects' }
    ];
    let comments = [
      {id:1, postId:1,owner:'gad1', dateSubmitted:'123',content:'content1'},
      {
        id:2, postId:1,owner:'gad2', dateSubmitted:'123',content:'content2',
        comments:[{id:4, postId:1,owner:'gad5', dateSubmitted:'123',content:'sub content'}]
      },
      {id:3, postId:2,owner:'gad3', dateSubmitted:'123',content:'content3'}
    ];
    return {posts,comments};
  }
}
