type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

function updateForm(params: Params) {
  console.log(params);
}

const formData: Params = {
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
};

updateForm(formData);
