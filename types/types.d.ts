
interface FormTypes {
    name: string;
    email: string;
    message: string;
}

type FormValues = {
  name: string;
  email: string;
  message: string;
};

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};