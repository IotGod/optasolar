function fillAccountsApp(accountsInput) {
      html = ejs.render('<%= ("<li class="mdl-menu__item">")Accounts.join("</li>"); %>', {Accounts: accountsInput});
    }
