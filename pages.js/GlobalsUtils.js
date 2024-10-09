 exports.Globals = class Globals {
        
    static pageURL =  'https://homme.co.il/';

    //new mail credentials
    static newUserEmail = "Na260438@gmail.com";
    static newUserPassword = "Na260438!";
    static newUserName = "Nissim Ariel";
    static userPassword = "tester123!@#qwe";
    static userName = "tester";


    constructor(page) {
        this.page = page;
        
        this.consent = page.getByText('אני מסכים לתנאי השימוש באתר');
        this.loginBtn = page.locator('xpath = /html/body/nav/div[1]/div[3]/div[2]/div');
        this.nameField = page.locator('#user-d21758b');
        this.passwordField = page.locator('#password-d21758b');
        this.connectButton = page.locator('button:has-text("התחברות")');
        this.secondPasswordTime = page.locator('#user_pass');
        this.connectButton2 = page.locator('#wp-submit');
        this.personalArea = page.locator('i.far.fa-user-circle');
        }
    


    async performLoginActions(userName, userPassword) {
      await this.consent.click();  
      await this.loginBtn.click();
      await this.nameField.fill(userName);
      await this.passwordField.fill(userPassword);
      await this.connectButton.click();
      
      
    }
  }
    
  
    

