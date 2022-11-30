describe('citilink валидный логин и пароль', function () {

    it('Вход с верным логином и паролем', function () {
       cy.visit('https://www.citilink.ru/');
       cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
       cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('donjuangirl@inbox.ru');
       cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('colombina79');
       cy.get('.SignIn__button > .Button__text').click();
       cy.get('.HeaderUserName__name').click();
       cy.contains('Заказы');
       })
       it('Вход с неверным паролем', function () {
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
        cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('donjuangirl@inbox.ru');
        cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('colombina86');
        cy.get('.SignIn__button > .Button__text').click();
        
        })
})