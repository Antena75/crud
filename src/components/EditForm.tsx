import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateForm from "./CreateForm";

interface Post {
  id: number;
  content: string;
  created: number;
}

export default function EditForm() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://backend1-4m4g.onrender.com/posts/${id}`
        );
        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSave = async (content: string) => {
    try {
      await fetch(`https://backend1-4m4g.onrender.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Number(id), content }),
      });
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("Ошибка при сохранении поста:", error);
    }
  };

  if (!post) return <p>Загрузка...</p>;

  return (
    <CreateForm onSave={handleSave} initialContent={post.content} isEdit={true} />
  );
}