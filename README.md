<<<<<<< HEAD
I have made an instruction with proper steps for setting up the financing-admin project locally since we do not have a readme.md for that purpose in gitlab.
1. Open CLI Git clone <link>
Note: that it won't work with 2FA.
Fix: disable 2FA-clone-enable 2FA again or do with ssh key having 2FA
Latest instruction for ssh key update/create is here
https://gitlab.com/help/ssh/README#rsa-ssh-keys
2. [Skip this step if you have latest ssh in gitlab] Paste ssh.pub, now it is called id_rsa.pub on your local machine or specify passphrase set during the ssh key creation.
3. Go to tests/uiTests/config/ folder and change data of 2 files:
  3.1. Create new testConfig.json file in tests/uiTests/config/ with next data:
{
  "testConfig": {
    "systemPrefix": "peugeot.", //Your personal environment brand name, '.' is required to make config work
    "systemPort": "",
    "buildIp": "",
    "mode": "web"
  }
}
   3.2. Create new testUserCredetials.json file in tests/uiTests/config/ with next data:
{
    "superadmin": {
        "login": "test@frontiercargroup.com",
        "password": "i love to test 2018"
    },
    "prodUser": {
        "login": "test@frontiercargroup.com",
        "password": "i love to test 2018"
    }
}
  3.3. Create new api.json file in tests/uiTests/config/ with next data:
{
  "auth": "https://api-peugeot.fcg.dev/auth/",
  "cardata": "https://api-peugeot.fcg.dev/cardata/",
  "inspection": "https://api-peugeot.fcg.dev/inspection/",
  "auction": "https://api-peugeot.fcg.dev/auction/",
  "financing": "https://api-peugeot.fcg.dev/financing/"
}
4. cd ~/.../financing-admin/tests/uiTests (Path to the folder)
5. npm install
6. npm audit fix
7. npm install nodejs
8. npm run createModelBasedPlans
9. npm run customerLoginModel_SIMPLE_ChileCountry_finalStateState_plan => plans are available in tests/uiTests/package.json file (command would run tests locally in uiTests folder only!)
10. Go to master branch and run git pull origin master
=======
# favorite_books
>>>>>>> 6d57f90508c05a0aad782490df28c15d90d57ac3
