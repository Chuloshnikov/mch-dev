
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

interface ProjectItemProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};