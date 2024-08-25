type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  if (initialValues.email) {
    console.log(`Updating email to: ${initialValues.email}`);
  }
  if (initialValues.password) {
    console.log(`Updating password.`);
  }
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
