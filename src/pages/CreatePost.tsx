import { useNavigate } from "react-router-dom";
import CreateForm from "../components/CreateForm";

export default function NewPostPage() {
  const navigate = useNavigate();

  const handleSave = async (content: string) => {
    try {
      await fetch("https://backend1-4m4g.onrender.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: 0, content }),
      });
      navigate("/");
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Создание поста</h2>
        <CreateForm onSave={handleSave} />
      </div>
    </div>
  );
}