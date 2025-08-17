import { Routes, Route } from "react-router-dom";
import ListPosts from "./pages/ListPosts";
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import EditPost from "./pages/EditPost";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPosts />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id" element={<ViewPost />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
    </Routes>
  );
}
