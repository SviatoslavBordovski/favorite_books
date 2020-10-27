Create new dealer with won car locally in VS Code IDE

1. Clone dealer-web project from gitlab
2. Create a file with a given script inside of the dealer-web/tests/uiTests folder
3. Make sure that you have set environment and credentials that you need in testUserCredentials.json, api.json and testConfig.json [dealer-web/tests/uiTests/config folder]
4. Open terminal and run 'cd dealer-web/tests/uiTests' command*
*if that did not work check where you are with 'pwd' command
5. Install dependencies with 'npm install' command
6. Open target file and set the last code row like:

generateInLoop(1, 'IN', 'sviatoslav.test.peugeot.in@frontiercargroup.com', '123456')

Number '1' => amount of won cars on auctions (max =< 20 supported)
Email and numbers => dealer's email and password

You can set any credentials there ;)


7. Run 'node mytest.js' command
8. Result should be something like:

ApiBuilder: FINISHED at 3:30:05 PM
9f6430db-c225-4768-8288-580c7108afac
{
  login: 'sviatoslav.test.id@frontiercargroup.com',
  password: '123456'
}
cars generated successfully!
