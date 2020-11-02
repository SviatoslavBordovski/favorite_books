<html>

<body>

<div class="container">

<h5>Financing-admin setup</h5>

<ol>


<li> Open CLI and type <code>git clone <b>link</b></code>
<hr>
Note: that it won't work with 2FA.
<hr>
Fix: disable 2FA-clone project-enable 2FA again or do the operation with ssh key having 2FA
<hr>
Latest instruction for ssh key update/creation is <a href="https://gitlab.com/help/ssh/README#rsa-ssh-keys">here</a>
</li>

<li>[Skip this step if you have latest ssh in gitlab] Paste <code>ssh.pub</code>, now it is called <code>id_rsa.pub</code> on your local machine or specify passphrase set during the ssh key creation.</li>

<li>Go to tests/uiTests/config/ folder and change data of 2 files:

<li>Create new <code>testConfig.json</code> file in <code>tests/uiTests/config/</code> folder with next data:
<code>
{
  "testConfig": {
    "systemPrefix": "peugeot.", //Your personal environment brand name, '.' is required to make config work
    "systemPort": "",
    "buildIp": "",
    "mode": "web"
  }
}
</code>
</li>

<li>Create new <code>testUserCredetials.json</code> file in <code>tests/uiTests/config/</code> folder with next data:
<code>
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
</code>
</li>

<li>Create new <code>api.json</code> file in <code>tests/uiTests/config/</code> folder with next data:
<code>
{
  "auth": "https://api-peugeot.fcg.dev/auth/",
  "cardata": "https://api-peugeot.fcg.dev/cardata/",
  "inspection": "https://api-peugeot.fcg.dev/inspection/",
  "auction": "https://api-peugeot.fcg.dev/auction/",
  "financing": "https://api-peugeot.fcg.dev/financing/"
}
</code>
</li>

<li> <code>cd ~/.../financing-admin/tests/uiTests</code> (Path to the folder)</li>
<li> <code>npm install</code> </li>
<li> <code>npm audit fix</code> </li>
<li> <code>npm install nodejs</code> </li>
<li> <code>npm run createModelBasedPlans</code> </li>
<li> <code>npm run customerLoginModel_SIMPLE_ChileCountry_finalStateState_plan</code> => plans are available in <code>tests/uiTests/package.json</code> file (command would run tests locally in <code>tests/uiTests</code> folder only!) </li>
<li> Go to master branch and run <code>git pull origin master</code> </li>

</ol>
</div>

</body>
</html>