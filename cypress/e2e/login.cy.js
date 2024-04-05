
describe('Автотесты login.qa.studio авторизация', function () {
    //домашка 12.2 задание 1.1
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
      //домашка 12.2 задание 1.2
    it('Автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
      //домашка 12.2 задание 1.3
     it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio111');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
     //домашка 12.2 задание 1.4
     it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('Ggerman@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
     //домашка 12.2 задание 1.5
     it('Негативный кейс валидации, логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
     //домашка 12.2 задание 1.6
     it('Проверка на привидение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

})



      describe('Покупка аватара', function () {                               
   it('e2e тест на покупку нового аватара для тренера', function () {   
        cy.visit('https://pokemonbattle.me/');                         
        cy.get('input[type="email"]').type('USER_LOGIN');
        cy.get('input[type="password"]').type('USER_PASSWORD');
        cy.get('button[type="submit"]').click();        
        cy.get('.header__btns > [href="/shop"]').click(); 
        cy.get('.available > button').first().click();                  
        cy.get('.credit').type('4620869113632996'); 
        cy.get('.k_input_ccv').type('125'); 
        cy.get('.k_input_date').type('1225'); 
        cy.get('.k_input_name').type('Artem DIG');
        cy.get('.pay-btn').click();
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible'); 
        cy.get('.payment__adv').should('be.visible') 
    });
});