import passwordValidator from "./passwordValidator";

describe("Password Validation", () => {
  it("should return no errors for a valid password", () => {
    const password = "Passw0rd!";
    const errors = passwordValidator(password);
    expect(errors).toHaveLength(0);
  });

  it("should return errors for an invalid password", () => {
    const password = "passe";
    const errors = passwordValidator(password);
    expect(errors).toHaveLength(4);
    expect(errors).toContain(
      "Le mot de passe doit comporter au moins 8 caractères."
    );
    expect(errors).toContain(
      "Le mot de passe doit contenir au moins 1 chiffre."
    );
    expect(errors).toContain(
      "Le mot de passe doit contenir au moins une lettre majuscule."
    );
    expect(errors).toContain(
      "Le mot de passe doit contenir au moins un caractère spécial."
    );
  });
});
