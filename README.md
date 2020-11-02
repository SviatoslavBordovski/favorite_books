<html>

<body>

<div class="container">

<h3>Financing-admin setup</h3>

<ol>

<li> Open CLI and type <code>git clone <b>link</b></code>
<br>
Note: that it won't work with 2FA.
<br>
Fix: disable 2FA-clone project-enable 2FA again or do the operation with ssh key having 2FA
<br>
Latest instruction for ssh key update/creation is <a href="https://gitlab.com/help/ssh/README#rsa-ssh-keys">here</a>
</li>

<li><i>Skip this step if you have latest ssh in gitlab</i>
<br>
Paste <code>ssh.pub</code>, now it is called <code>id_rsa.pub</code> on your local machine or specify passphrase set during the ssh key creation.</li>

<li>Go to tests/uiTests/config/ folder and change data of 2 files:

<li>Create new <code>testConfig.json</code> file in <code>tests/uiTests/config/</code> folder with next data:
<br>{
<br>  "testConfig": {
<br>    "systemPrefix": "peugeot.", //Your personal environment brand name, <code>.</code> is required to make config work
<br>    "systemPort": "",
<br>    "buildIp": "",
<br>    "mode": "web"
<br>     }
<br>}

</li>

<li>Create new <code>testUserCredetials.json</code> file in <code>tests/uiTests/config/</code> folder with next data:
<br>{
<br>    "superadmin": {
<br>        "login": "test@test.com",
<br>        "password": "2020"
<br>    },
<br>    "prodUser": {
<br>        "login": "test@test.com",
<br>        "password": "2020"
<br>    }
<br>}

</li>

<li>Create new <code>api.json</code> file in <code>tests/uiTests/config/</code> folder with next data:
<br>{
<br>  "auth": "link",
<br>  "cardata": "link",
<br>  "inspection": "link",
<br>  "auction": "link",
<br>  "financing": "link"
<br>}

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