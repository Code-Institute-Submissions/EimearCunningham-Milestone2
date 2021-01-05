# Testing

## Validation Services
### Validation Services used
* [W3C Markup Validation Service](https://validator.w3.org/) - To validate html code
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - To validatate CSS code
* [JS Hint](https://jshint.com/) - To validate JavaScript code

### Errors / Warnings found by W3C Markup Validation Service:
- Errors:
- Warnings: 

### Errors / Warnings found by W3C CSS Validation Service:
- Errors:
- Warnings: 

### Errors / Warnings found by JS Hint:
- Errors:
- Warnings: 

## Speed Testing
[Pingdom.com](https://tools.pingdom.com/) was used to test the load time of the website.
The following results and recommendations were obtained:

![Speed Test Results](assets/images/readme-images/speed-test.JPG)
      
## Testing User Stories 
1.	As a user, I want to learn more about the café, and read some background information to get a feel for the company.
    * Upon entering the site the first thing the user sees is an image of one of the cafe locations interiors, with the cafe logo placed over this. This gives the user an immediate feel for the cafe chain and the logo makes use of branding practices.
    * The first thing the user sees once they scroll past the hero image is the 'About Us' section - which provides more information on the story behind the cafe, the cafe owners and the team.
    * The 'About Us' section is accesible through the navbar at all times.

2.	As a user, I want to view the cafes menu and see what items are on offer for breakfast, lunch, drinks and dessert at the café.
    * The 'Menu' section is also accesible through the navbar which means the user can always view the menu at a click.
    * The Menu makes use of tabs to allow the user to easily see what menu items are available for the purpose of their cafe visit (Breakfast/lunch/drinks/desserts)
    * This means that if the user is visiting the cafe for lunch, they can easily select the 'Lunch' tab, rather than scrolling through all items offered.
    * Menu item prices are also included, so that the user can easily get an idea of pricing.
3.	As a user, I want to see where the cafes are located on a map. I want to be able to see the cafes exact location so that I can decide which one I would like to visit. I would also like to be able to obtain contact information for each cafe location.
    * The 'Locations' section makes use of Google Maps API to provide a responsive map with a marker for each location.
    * When a location marker is clicked on by the user, an info window pops up with more information about that location - Cafe address and contact number.
4.	As a user, I want to be able to be able to contact the company to reserve a table. I would like to be able to select the cafe location convenient for me, and then select my preffered date and time.
    * The 'Book a Table' section provides a form for the user to fill out to book a table.
    * The form prompts the user to fill in their name, email address, contact number, preferred location, date and time.
    * If the user tries to submit the form without filling out any of the inputs, they receive customised error messages explaining that this information is needed to book a table.
    * Upon submitting the form the user receives a notification explaining that Wholesome Kitchen will review their booking request and get back to them within 24 hours.

## Manual testing of all elements and functionality 
1. Navigation bar
    * On screen sizes with a width of **990px and above,** the navigation bar appears as a fixed top with 5 visible links to each section of the page.
    * This was tested by manually clicking each link and ensuring it led to the corrent section of the page.
    * Upon testing I noticed that top-padding was needed on each section due to the fixed-top navigation bar using up space on the page. I added top padding of 30px to each main section to fix this issue.
    * On screen sizes **below 990px** the navigation bar collapses into a navbar-toggler button with a burger icon.
    * I tested this using chrome developer tools - changing screen size to various sizes below 990px, and using various different devices.
    * I clicked on the toggler button to ensure the dropdown menu opened.
    * Once the menu opened, I clicked on each link to ensure it led to the correct section of the page.
    * During testing I noticed that when a link was clicked the menu stayed open, meaning the user had to select the menu icon again to close the menu. I decided to add some jQuery to ensure the menu closed upon a link being selected as this led to a more smooth user experience.
2. About Us Section
    * On large and medium screen sizes, the 3 paragraphs in the About Us section have an on scroll event.
    * This was manually tested by ensuring that when I scrolled down 250px, 600px, 800px - the corresponding paragraphs faded in.
    * On testing the responsiveness of the About Us section using Chrom developer tools, I noticed the sectio looked better on small screen sizes without the 3 circular images. I decided to only show the images on medium and large screen sizes (above 768px)

3. Menu Section 
    * 

4. Locations Section  
    * 

5. Book a Table Section
    * 

6. Pager footer 
    * 

7. Scroll to Top button
    

## Accessability Testing
[WAVE Web Accessability Evaluation Tool](https://wave.webaim.org/) was used to test the accessability of my site.
The following changes were made upon recommendation from WAVE:

* Alt text of main headshot image was made more meaningful.
* Skipped heading ranks were changed to avoid confusion 