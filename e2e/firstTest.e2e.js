describe("Home Screen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should register a new skill when input and tab button", async () => {
    const inputNewSkill = await element(by.id("input-new"));
    const buttonAdd = await element(by.id("button-add"));
    const flatListSkills = await element(by.id("flatlist-skills"));

    await inputNewSkill.tap();
    await inputNewSkill.typeText("React Native");

    await buttonAdd.tap();

    await flatListSkills.tap();

    expect(element(by.id("flatlist-skills"))).toBeVisible();
  });
});
