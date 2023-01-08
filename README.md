![PopPersonality Logo](docs/readme-images/logo.JPG)

<h1>Overview</h1>
This fun quiz allows users to match with one of the characters from popular movies/series. 
User needs to provide their age to be assigned to one of 3 age groups - kids, teens, adults. After answering a set of 10 random questions user is matched with one of 4 characters based on achieved score total. It was built with HTML, CSS and Javascript only without the use of additional libraries.

![Multidevice mockup](docs/readme-images/mockup.JPG)

[View live website here](https://agatoma.github.io/PopPersonality/)

<h2>User experience & user stories</h2>
<ul>
    <li>Users are matched with characters appropriate for their age group</li>
    <li>Users can find out more about themselves in a fun way</li>
    <li>Users are asked for their name in the beginning to highlight the personal nature of the quiz</li>
    <li>Users can use the quiz on multiple devices thanks to it's responsiveness</li>
    <li>Users can get the results quickly due to only 10 questions each round they take it</li>
    <li>Users can familiarize themselves with the rules easily by accessing the rules modal</li>
</ul>

<h1>Design</h1>
<h2>Sketches</h2>
<h2>Fonts<h2>
<ul>
<li>Josefin Sans
<p>Used for all content except logo</p>
<ul>
<li>300</li>

![300](docs/readme-images/font300.JPG)

<li>400</li>

![400](docs/readme-images/font400.JPG)

<li>Bold</li>

![Bold](docs/readme-images/fontbold.JPG)
</ul>
</li>
<li>Times</li>
Default browser Times font was kept and used as a base to style the logo (see above)
</ul>
<h2>Colors</h2>
Background photo of a person partly covered with colourful powder/mist on a black background was used as an inspiration for the color palette
To ensure proper contrast text boxes were also given dark background with a level of opacity applied
For correct contrast, content font is white with the exception of styled logo, which is pink.
The chosen color palette is to combine pop gaudiness of pink accents (site logo, Github logo) and a mix of yellow, shades of pink and blue with a psychological mystery of dark backgrounds (main and card/text boxes). Mix of colors also indicates a mix of personalities.
<h2>Quiz flow</h2>
<ul>
<li>Greeting screen with invitation to quiz</li>
<li>User can read rules by pressing and popping out Rules modal</li>
<li>User presses Go to quiz to start - User asked for name - name input with empty validation - User addressed by name and asked for age - age input with empty/number validation 
<li>On start quiz user assigned to relevant age group for question selection</li>
<li>10 Questions are selected randomly for user out of 20 available (kids & teens same sets of questions)</li>
<li>User answers question - selects yes, no, sometimes on radio buttons - set score for each selection is captured</li>
<li>User completes all 10 questions - after 10th question submission score is calculated (total of captured individual values)</li>
<li>Based on score results card is displayed (4 characters for each of 3 groups, each characted has a score value range)</li>
</ul>
<h1>Features</h1>
<h2>Site wide<h2>
<h3>Favicon<h3>
Butterly favicon will help the user identify the website quickly, when having multiple tabs open in the browser.

![Fav](docs/readme-images/favicon.JPG)

<h3>Logo<h3>

Logo made of pink Times font letters with a whitish hue is present on all pages/cards displayed. It also serves as a link directing the user to the Home page. The logo is placed inside a header.
![Logo](docs/readme-images/logo.JPG)

<h3>Footer<h3>

Footer includes a short description of the site's purpose and a link to the author's Github profile. 
![Footer](docs/readme-images/footer.JPG)

<h3>404 page<h3>

This page will appear when user navigates to a broken link. It will allow user to go back to the home page by clicking the displayed logo, which is more user friendly than trying the browser back arrow.
![404](docs/readme-images/404.JPG)

<h2>Home page (intro)</h2>
<h3>Description</h3>

This section has a short introduction to the quiz, explaining what it is and directing user to Rules modal for further details. 
![Description](docs/readme-images/description-box.JPG)

<h3>Rules modal</h3>

User can access the Rules modal by clicking Rules button under description.
![Rules-btn](docs/readme-images/rules-button.JPG)

The modal format to contain rules details was used to save space on the home page and to provide a user controlled experience. User can close the modal by clicking "x" in the top right corner of the modal.
![Rules-modal](docs/readme-images/rules-modal.JPG)

<h3>Go to quiz</h3>

To proceed to the quiz page, user clicks the Go to quiz button.
![Quiz intro btn](docs/readme-images/quiz-intro-btn.JPG)

<h2>Quiz page</h2>
<h3>Name box</h3>

Name box appears before user can access quiz questions. User needs to enter their name. Blank submission is not possible - the submit button is disabled upon blank submission attempt and reenabled when user fills out the input box. The name is captured to personalize the next step and also for adding future features, when user information would be stored in a database. 
![Name box](docs/readme-images/name-box.JPG)

<h3>Age box</h3>

Next user needs to fill out their age to be assigned to the correct set of questions (Set 1: Kids/teens, Set 2: Adults). A placeholder is added to let user know the correct format. The input box itself is requiring a number format and blank or non number submission is not allowed with the validation method as name box (logic changed to check for specific age box requirements).

![Age box](docs/readme-images/age-box.JPG)

<h3>Question cards</h3>

After age is correctly filled out, user is given 10 questions, which are randomly selected from the set user was assigned to based on their entered age. Counter on top lets the user know which question out of how many they are currently answering. In order to proceed to the next question, user needs to make a selection out of 3 possible answers. Until they make the first selection, they see a prompt to select an asnwer right above the disabled next button. Upon first selection, the button is enabled/becomes active. User can change their mind and choose a different answer before submitting the final selection and proceeding to next question via the Next question button. 

![Question 1](docs/readme-images/question1.JPG)
![Question 2](docs/readme-images/question2.JPG)

<h3>Results card</h3>

After user answers all 10 questions, the score is calculated as a total of each individual selection score. Based on the score user is matched with one of the four characters from one of the three age groups that user was assigned to based on their entered age. The groups are kids (8 - 12), teens (13 - 17) & adults (from 18). Results card displays a thank you message, matched character name, image and short caption/description. 

![Results](docs/readme-images/results.JPG)

<h2>Future</h2>
<ul>Features to be added in potential future deployments
<li>Results storage for individual users (database)</li>
<li>Results summary with most and least frequent occurences (database)</li>
<li>Emailing results to users - user controlled</li>
<li>Using a questions API (if available) to increase the amount of questions</li>
<li>Adding more options for results, matching score with results based on actual psychological research/resources</li>
<li>Adding a user led role play game with set of questions, where outcome depends on selected answers with story related to the matched character</li>
</ul>

<h1>Technologies</h1>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
<li>favicon.io</li>
<li>Google fonts</li>
<li>Chrome Dev Tools</li>
Elements tool was used for styling testing and Console for Javascript testing/validation/troubleshooting.
<li>JSHint</li>
<li>Gitpod</li>
The website was developed using Gitpod in Chrome
<li>GitHub</li>
Source code is hosted on GitHub and deployed using Git Pages.
<li>Git</li>
Used to commit and push code during the development of the Website
<li>Tinyjpg</li>
https://tinyjpg.com/ was used to reduce the size of the images 
<li>Convertio</li>
JPG format gallery photos were converted to webp using https://convertio.co/jpg-webp/ 
</ul>
<h1>Testing<h1>
<h2>Accessibility</h2>
<h2>Validator testing</h2>
<h2>Functional testing</h2>
Add Google sheet
<h2>Responsiveness</h2>
<h2>Bugs & fix summary?</h2>
<h1>Deployment</h1>
<h2>Version Control</h2>
Site was created and developed with GitHub using Gitpod in Chrome. The following commands were used for version control.
<ul>
    <li>git add . - add changes to staging area before committing</li> 
    <li>git commit -m "commit message" - committing staged changes to the local repository</li>
    <li>git push - pushing commited changes to the GitHub remote repository</li>
</ul>

<h2>Deployment with GitHub Pages</h2>

Site was deployed using GitHub Pages by following Settings -> Pages -> Deploy from a branch - choose main - click Save. 

Live website can be found [here](https://agatoma.github.io/PopPersonality)<br>
GitHub repository can be found [here](https://github.com/AgaToma/PopPersonality)

<h2>Forking & Cloning</h2>
<h1>Credits</h1>
<h2>References</h2>
<h2>Acknowledgements</h2>
<h2>Images</h2>
<h2>Content</h2>
<h2>Copyright disclaimer?</h2>