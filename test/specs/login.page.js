describe("My Login", () => {
    beforeEach(async () => {
        //Access to the login button by its text
        await $('//*[@text="Login"]').click();
    });

    //Negative test case
    it("should not login with invalid credentials", async () => {
        //Access the email input element by its accessibility id
        await $("~input-email").setValue("invalid");

        //Access the password input element by its accessibility id
        await $("~input-password").setValue("12345678");

        //Access the login button by its text
        await $('//*[@text="LOGIN"]').click();
        await driver.pause(3000);
    
        //Validate the error message by xpath
        await expect($('//android.widget.TextView[@text="Please enter a valid email address"]'))
        .toHaveText("Please enter a valid email address");
    });

    //Positive test case
    it("should login with valid credentials", async () => {
        //Access the email input element by its accessibility id
        await $("~input-email").setValue("test@email.com");

        //Access the password input element by its accessibility id
        await $("~input-password").setValue("12345678");

        //Access the login button by its text
        await $('//*[@text="LOGIN"]').click();
        await driver.pause(3000);

        //Validate the success message by xpath
        await expect($('//android.widget.TextView[@resource-id="android:id/alertTitle"]'))
        .toHaveText("Success");
      });
});
